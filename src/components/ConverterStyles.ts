import styled from 'styled-components';

export const Container = styled.div`
  background-color: #04471C;
  color: #E0EEC6;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin-top: 0px;
  margin-left: 45px;
  margin-right: 45px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
    padding: 15px;
  }
`;

export const RowInput = styled.div`
  display: flex;
  align-items: center; /* Mantém tudo alinhado na mesma linha */
  justify-content: flex-start; /* Alinha os itens à esquerda */
  gap: 10px; /* Adiciona um espaçamento entre os elementos */
  flex-wrap: nowrap; /* Impede que os selects quebrem para baixo */

  @media (max-width: 480px) {
    flex-wrap: wrap; /* Permite quebrar para telas pequenas */
  }
`;



export const RowResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  width: auto; /* Instead of 100% */
  max-width: 600px; /* Prevent it from growing too much */
  overflow: visible; /* Allow elements to be seen */
`;

export const Input = styled.input`
  flex: 1; /* Faz com que o input ocupe o máximo possível sem quebrar a linha */
  min-width: 200px; /* Mantém um tamanho mínimo */
  max-width: 315px; /* Garante que não cresça demais */
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 30px;
  border: 1px solid #ddd;
  font-weight: 500;
  height: 55px;
  box-sizing: border-box; /* Mantém o padding dentro do tamanho total */

  @media (max-width: 768px) {
    min-width: 150px;
  }
`;




export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0; /* Impede que encolham */
  gap: 5px; /* Espaçamento entre os selects */
  height: 55px;
`;


export const Select = styled.select`
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
  width: 100px;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 90px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 80px;
  }
`;

export const SelectTo = styled.select`
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
  margin-left: 5px;
  width: 100px;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 90px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 80px;
  }
`;

export const ResultButton = styled.div`
  background-color: #C2A83E;
  color: #171717;
  padding: 10px 20px;
  margin: auto;
  border-radius: 18px;
  font-size: 40px;
  cursor: default;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77px;
  width: 510px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 30px;
    width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    width: 100%;
    padding: 10px;
  }
`;

export const AddButton = styled.button`
  background-color: #7CA982;
  color: white;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 13px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 40px;
  position: relative; /* Change from absolute to relative */
  margin-top: 10px; /* Instead of transform */
  right: 0; /* Reset right positioning */
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 35px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    height: 30px;
  }
`;


