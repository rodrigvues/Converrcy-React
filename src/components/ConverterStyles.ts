import styled from 'styled-components';

export const Container = styled.div`
  background-color: #04471C;
  color: #E0EEC6;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Align content to the left
  width: 100%;
  max-width: 600px; // Ensure it doesn't stretch too wide
  margin-top: 0px;
  margin-left: 45px;
  margin-right: 45px;
  padding: 20px;
`;

export const RowInput = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 10px;
`;

export const RowResult = styled.div`
  display: flex;
  align-items: flex-start; // Align items to the start of the container
  justify-content: left;
  margin-top: 10px;
  position: relative; // Ensure the container is positioned relatively
`;

export const Input = styled.input`
  width: 315px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  border-radius: 30px;
  border: 1px solid #ddd;
  font-weight: 500;
  height: 30px;
  margin-right: 5px;
  margin-left: 0px;
  margin-bottom: 0px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-left: 0px;
  margin-bottom: 0px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
  width: 100px;
`;

export const SelectTo = styled.select`
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
  margin-left: 5px;
  width: 100px;
`;

export const ResultButton = styled.div`
  background-color: #C2A83E;
  color: #171717;
  padding: 10px 20px;
  margin: auto;
  border-radius: 18px;
  font-size: 40px;
  cursor: default;
  font-weight: 800;
  text-align: center; // Center text horizontally
  display: flex; // Use Flexbox
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  height: 77px;
  width: 510px;
  position: relative; // Ensure the button is positioned relatively
`;

export const AddButton = styled.button`
  background-color: #7CA982;
  color: white;
  padding: 10px;
  margin-left: 10px; // Add left margin for spacing
  border: none;
  border-radius: 13px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 40px;
  position: absolute; // Position the button absolutely
  bottom: 21px; // Align to the bottom of the container
  right: -45px; // Align to the right of the container
  transform: translateY(50%); // Adjust the vertical position
`;