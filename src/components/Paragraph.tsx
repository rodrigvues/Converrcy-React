import React from 'react';
import { Title, ParagraphText, WholeParagraph } from './Paragraph';

const Paragraph: React.FC = () => {
  return (
  <WholeParagraph>
    <Title>Converrcy</Title>
    <ParagraphText>
          Easily convert currencies with real-time exchange rates and share <br />your conversions with friends. Whether you’re traveling or managing <br />your finances, stay updated and share your results with Converrcy!
    </ParagraphText>
  </WholeParagraph>
  );
};

export default Paragraph;