import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 45px;
  margin-right: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #04471C;
  color: #E0EEC6;
`;

export const Logo = styled.img`
  height: 45px;  
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #E0EEC6;
  text-decoration: none; // Remove underline
  font-weight: 500;
  font-size: 20px;
  &:hover {
    text-decoration: none; // Ensure no underline on hover
  }
`;

export const NavItemLanguage = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #E0EEC6;
  text-decoration: none; // Remove underline
  font-weight: 700;
  font-size: 20px;
  &:hover {
    text-decoration: none; // Ensure no underline on hover
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #7CA982;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${SwitchInput}:checked + & {
    background-color: #2196F3;
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(20px);
  }
`;