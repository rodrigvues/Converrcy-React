import styled from 'styled-components';

export const FooterBox = styled.div`
  background-color: #E0EEC6;
  color: #04471C;
  padding-top: 50px;  /* Add padding to the top to make the box taller */
  margin-top: 125px;
  width: 100%;
  position: relative;
`;

export const CtaSection = styled.div`
  background-color: #C2A83E;
  color: #04471C;
  padding: 20px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  margin-top: -20px;  /* Adjust margin to overlap with the footer box */
  position: relative;
  z-index: 1;
`;

export const CTAText = styled.h3`
  margin-bottom: 9px;
  margin-top: 0px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #04471C;
  color: #E0EEC6;
  border: none;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  flex: 1;
  margin: 0 10px;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 5px;
  }

  ul li a {
    color: #04471C;
    text-decoration: none;
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Rights = styled.p`
  margin: 0;
`;

export const GitHubIcon = styled.a`
  img {
    width: 20px;
    margin-left: 10px;
    vertical-align: middle;
  }
`;