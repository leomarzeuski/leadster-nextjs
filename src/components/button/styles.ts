import styled from "styled-components";

type PropsButton = {
  isPressed: boolean;
};

export const Button = styled.button<PropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 16px;
  padding: 8px 20px;
  color: gray;
  font-size: 12px;
  background-color: transparent;
  border: 2px solid gray;
  font-weight: 600;
  :hover {
    border: 2px solid #2c83fb;
    color: #2c83fb;
  }
  ${({ isPressed }) => isPressed && handleButtonPressed()}
`;

const handleButtonPressed = () => {
  return `
    background-color: #2c83fb;
    border: 2px solid #2c83fb;
    color: #fff;
    :hover {
        color: #fff;
    }
    `;
};
