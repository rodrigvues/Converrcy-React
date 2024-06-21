import React from 'react';
import { FooterBox, CtaSection, FooterColumns, FooterColumn, FooterEnd, Input, Button, FooterContainer, Rights, GitHubIcon, CTAText } from './FooterStyles';
import githubicon from './assets/images/github-icon.png'; // Adjust the path based on your folder structure

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <CtaSection>
        <CTAText>Keep up with Converrcy updates:<br/>Subscribe in our NewsLetter!</CTAText>
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit">Subscribe</Button>
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
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help the Project</a></li>
            </ul>
          </FooterColumn>
        </FooterColumns>
        <FooterEnd>
          <Rights>&copy; 2024 Converrcy, All rights reserved.</Rights>
          <GitHubIcon href="#">
            <img src={githubicon} alt="GitHub" />
          </GitHubIcon>
        </FooterEnd>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;