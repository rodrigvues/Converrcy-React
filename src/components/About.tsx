import React from 'react'
import { AboutContainer, Section, SectionTitle, Paragraph } from './AboutStyles';
import { Translations } from '../types';

interface AboutProps {
  translations: Translations; // Certifique-se de que a propriedade text está definida
}

export default function About({translations}:AboutProps) {
  const { about } = translations;
  return (
    <AboutContainer>
    <Section>
        <SectionTitle>{about.text_1}</SectionTitle>
        <Paragraph>
          {about.text_2}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>{about.text_3}</SectionTitle>
        <Paragraph>
          {about.text_4}
        </Paragraph>
        <Paragraph>
          {about.text_5}<br />
          {about.text_6}<br />
        </Paragraph>
      </Section>
    </AboutContainer>
  )
}
