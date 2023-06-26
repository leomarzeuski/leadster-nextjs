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
`;

export const Button = styled.button`
  background-color: #2c3e50;
  font-weight: 600;
  type: button;
`;

export const Text = styled.p`
  font-size: 0.5;
  color: #2c3e50;
  font-weight: 500;
`;
