import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 90px;
  color: #C2A83E;
  margin-bottom: 1px;
  font-weight: 900;
  text-align: left;  // Align title text to the left
  margin-left: -2px;
`;

export const ParagraphText = styled.p`
  margin: 0 ;
  text-align: left;  // Align paragraph text to the left
  font-weight: 500;
  margin-bottom:0px;
  font-size: 20px;
  width: 750px;
`;

export const WholeParagraph = styled.div`
  text-align: left;  // Align container to the left
  max-width: 600px;
  margin: 1px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: left;  // Ensure content is aligned to the left
  margin-left: 45px;
  margin-right: 45px;
`;
