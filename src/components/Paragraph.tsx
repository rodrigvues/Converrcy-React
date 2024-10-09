import React from 'react';
import { Title, ParagraphText, WholeParagraph } from './ParagraphStyles';

interface ParagraphProps {
  text: string; // Tipagem da propriedade text
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => { // Desestruturando a propriedade text
  return (
    <WholeParagraph>
      <Title>{text}</Title> {/* Usando a propriedade text corretamente */}
      <ParagraphText>
        Easily convert currencies with real-time exchange rates and share <br />
        your conversions with friends. Whether you’re traveling or managing <br />
        your finances, stay updated and share your results with Converrcy!
      </ParagraphText>
    </WholeParagraph>
  );
};

export default Paragraph;
