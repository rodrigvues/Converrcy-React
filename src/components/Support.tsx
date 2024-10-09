import React from 'react'
import { SupportContainer, Section, SectionTitle, Paragraph } from './SupportStyles';

interface AboutProps {
  text: string; // Certifique-se de que a propriedade text está definida
}

export default function Support() {
  
  return (
    <SupportContainer>
      <Section>
        <SectionTitle>Support</SectionTitle>
        <Paragraph>
          If you need any assistance or have any questions about Converrcy, please don't hesitate to contact for support. We are here to help you with any issues or inquiries you may have.
        </Paragraph>
        <Paragraph>
          For support, please contact at: <a href="mailto:rodrigvues@gmail.com">rodrigvues@gmail.com</a>
        </Paragraph>
        <Paragraph>
          We strive to respond to all support requests as quickly as possible and appreciate your patience.
        </Paragraph>
      </Section>
    </SupportContainer>
  )
}
