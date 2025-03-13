import styled from 'styled-components';

export const SupportContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  text-align: left;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: flex-start;
  margin-left: 45px;
  margin-right: 45px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 90px;
  color: #C2A83E;
  font-weight: 900;
  text-align: left;
  margin-left: -2px;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
