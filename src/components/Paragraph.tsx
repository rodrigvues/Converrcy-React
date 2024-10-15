import React from 'react';
import { Title, ParagraphText, WholeParagraph } from './ParagraphStyles';
import { Translations } from '../types'; // Importando o tipo

interface ParagraphProps {
  translations: Translations; // Usando o tipo genérico
}

const Paragraph: React.FC<ParagraphProps> = ({ translations }) => {
  const { paragraph } = translations;
  return (
    <WholeParagraph>
      <Title>Converrcy</Title>
      <ParagraphText>
        {paragraph.text_1}
      </ParagraphText>
    </WholeParagraph>
  );
};

export default Paragraph;
