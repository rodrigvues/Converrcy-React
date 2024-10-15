import React from 'react'
import { SupportContainer, Section, SectionTitle, Paragraph } from './SupportStyles';
import { Translations } from '../types';

interface SupportProps {
  translations: Translations; // Certifique-se de que a propriedade text está definida
}

export default function Support({translations}:SupportProps) {
  const { support } = translations;
  return (
    <SupportContainer>
      <Section>
        <SectionTitle>{support.text_1}</SectionTitle>
        <Paragraph>
        {support.text_2}
        </Paragraph>
        <Paragraph>
        {support.text_3}<a href="mailto:rodrigvues@gmail.com">rodrigvues@gmail.com</a>
        </Paragraph>
        <Paragraph>
        {support.text_4}
        </Paragraph>
      </Section>
    </SupportContainer>
  )
}
