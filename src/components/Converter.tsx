import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Select, SelectContainer, ResultButton, AddButton, RowInput, RowResult, SelectTo } from './ConverterStyles';
// usando interface pra armazenar api key que tem os dados da conversão
// ( mudarei pra arq. env futuramente )
interface ExchangeRatesResponse {
  data: {
    [key: string]: {
      value: number;
    };
  };
}

// api key armazenada em variável ( mudarei pra arq. env futuramente )
const API_KEY = 'cur_live_IYZ1dNoUBoIWe2k3bQZ2pdE01Gi4Mz5R2soM4OxR';


//começo do código
const Converter: React.FC = () => {
  //states
  const [amount, setAmount]             = useState<number>(1); // state que armazena e renderiza a quantidade($) ( amount )
  const [fromCurrency, setFromCurrency] = useState<string>('USD'); // state que fica com a primeira moeda ( usd default )
  const [toCurrency, setToCurrency]     = useState<string>('EUR'); // state que fica com a segunda moeda (euro default )
  const [exchangeRate, setExchangeRate] = useState<number | null>(null); // state que armazena o câmbio
  const [currencies, setCurrencies]     = useState<string[]>([]); // state que armazena as moedas disponíveis

  // pega a moeda da api uma vez que o componente é montado na dom
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get<ExchangeRatesResponse>('https://api.currencyapi.com/v3/latest', {
          params: { apikey: API_KEY, base_currency: 'USD' },
        });
        const data = response.data.data;
        setCurrencies(Object.keys(data)); // seta as moedas ( currencies )
      } catch (error) {
        console.error('Error fetching currencies:', error); // catch error em caso de problema no processo
      }
    };

    fetchCurrencies();
  }, []);

  // pega a nova de taxa de câmbio toda vez que a 1ª ou 2ª moeda muda
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get<ExchangeRatesResponse>('https://api.currencyapi.com/v3/latest', {
          params: { apikey: API_KEY, base_currency: fromCurrency },
        });
        const data = response.data.data;
        setExchangeRate(data[toCurrency].value); // seta a taxa de câmbio ( exchange rate )
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  // função para lidar com a mudança da quantidade($)
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value); // cria value e iguala ao valor colocado no input
    // if para não deixar user colocar qntd abaixo de 0
    if (value >= 0) {
      setAmount(value); // seta quantidade se for igual ou acima de 0
    } else {
      setAmount(0); // seta qntd pra 0 toda vez que for mudada para menos que 0
    }
  };

  // função para lidar com a 1ª moeda ( from currency ), toda vez que que é mudada
  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  // função para lidar com a 2ª moeda ( to currency ), toda vez que que é mudada
  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  // converte ( calcula ) a quantidade usando a taxa de câmbio
  const convert = (amount: number, rate: number | null) => (rate ? (amount * rate).toFixed(2) : '0');
  /*
    if rate !== null ( se a taxa de câmbio não é nula )
    const result = amount * rate / calcula o resultado da conversão
    const formattedResult = result.toFixed(2)  / formatando, assim 2 casas decimais
    else
    return '0' / se a taxa de câmbio for nula retorna 0
  */

  // começo do html
  return (
    <Container>
    <RowInput>
    <Input type="number" value={amount} onChange={handleAmountChange} />
    <SelectContainer>
      <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
      <SelectTo value={toCurrency} onChange={handleToCurrencyChange} id="tocurrency" >
        {currencies.map((currency) => (
          < option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </SelectTo>
    </SelectContainer>
  </RowInput>
  <RowResult>
    <ResultButton>
      {amount} {fromCurrency} is {convert(amount, exchangeRate)} {toCurrency}
    </ResultButton>
    <AddButton>+</AddButton>
  </RowResult>
  </Container>
  );
};


export default Converter;
