import React from 'react';
import { FooterBox, CtaSection, FooterColumns, FooterColumn, FooterEnd, Input, Button, FooterContainer, Rights, GitHubIcon, CTAText } from './FooterStyles';
import githubicon from './assets/images/github-icon.png'; // Adjust the path based on your folder structure
import { Translations } from '../types';

interface FooterProps {
  translations: Translations; 
}

const Footer: React.FC<FooterProps> = ({translations}) => {
  const { footer } = translations;
  return (
    <FooterBox>
      <CtaSection>
        <CTAText>{footer.text_1}<br/>{footer.text_2}</CTAText>
        <Input type="email" placeholder="E-mail" />
        <Button type="submit">{footer.text_3}</Button>
      </CtaSection>
      <FooterContainer>
        <FooterColumns>
          <FooterColumn>
            <h4>Dev</h4>
            <ul>
              <li><a href="#">Tech Stack</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>{footer.text_4}</h4>
            <ul>
              <li><a href="#">{footer.text_5}</a></li>
              <li><a href="#">{footer.text_6}</a></li>
            </ul>
          </FooterColumn>
        </FooterColumns>
        <FooterEnd>
          <Rights >&copy;{footer.text_7}</Rights>
          <GitHubIcon href="#">
            <img src={githubicon} alt="GitHub" />
          </GitHubIcon>
        </FooterEnd>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;