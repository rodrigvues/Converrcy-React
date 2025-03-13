import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 90px;
  color: #C2A83E;
  margin-bottom: 1px;
  font-weight: 900;
  text-align: left;
  margin-left: -2px;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

export const ParagraphText = styled.p`
  margin: 0;
  text-align: left;
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 20px;
  max-width: 100%; /* Garante que nunca ultrapasse a tela */
  padding-right: 50px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-right: 15px;
  }
`;


export const WholeParagraph = styled.div`
  text-align: left;
  max-width: 100%; /* Evita que estoure a tela */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - 90px); /* Ajusta largura com base nas margens */
  padding: 20px;
  margin: 1px auto; /* Centraliza o conteúdo */

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
    padding: 10px;
  }
`;
