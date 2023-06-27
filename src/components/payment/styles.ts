import styled from "styled-components";
import Image from "next/image";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f0f9ff;
  min-height: 500px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

export const Logo = styled(Image)`
  max-width: 650px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 0;
`;

export const Headline = styled.h2`
  font-size: 2.4em;
  font-weight: 500;
  color: #2c3e50;
  max-width: 450px;
`;

export const BoldText = styled.b`
  font-weight: 700;
`;

export const SubHeadLine = styled.h3`
  font-size: 1.6rem;
  color: #2c3e50;
  font-weight: 400;
  border-bottom: solid 1px #c9c9c9;
  padding-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 20px 30px;
  border-radius: 26px;
  border: 2px solid #1f76f0;
  background: #1f76f0;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: transparent;
    color: #1f76f0;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const Text = styled.p`
  font-size: 0.5;
  color: #2c3e50;
  font-weight: 500;
`;
