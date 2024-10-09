import React from 'react'
import { AboutContainer, Section, SectionTitle, Paragraph } from './AboutStyles';

interface AboutProps {
  text: string; // Certifique-se de que a propriedade text está definida
}

export default function About() {
  
  return (
    <AboutContainer>
    <Section>
        <SectionTitle>About Converrcy</SectionTitle>
        <Paragraph>
          Converrcy is a React project created by Vitor Rodrigues. It serves as an online currency converter, designed to provide users with real-time exchange rates for up to 32 different currencies. Whether you're traveling, managing your finances, or simply curious about exchange rates, Converrcy offers a reliable and easy-to-use solution.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Features</SectionTitle>
        <Paragraph>
          Converrcy currently supports the following features:
        </Paragraph>
        <Paragraph>
          - Conversion of up to 32 different currencies.<br />
          - Real-time exchange rates to ensure accuracy.<br />
        </Paragraph>
      </Section>
    </AboutContainer>
  )
}
