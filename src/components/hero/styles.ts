import styled from "styled-components";
import Image from "next/image";

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f9ff;
  min-height: 500px;
  width: 100%;
`;
export const WebinarBox = styled.div`
  border: 2px solid #2c83fb;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  border-top-left-radius: 12px;
  background-color: transparent;
  color: #2c83fb;
  font-weight: 800;
  padding: 6px 16px;
  font-size: 11px;
  margin-bottom: 10px;
`;

export const FirstTittle = styled.h2`
  font-weight: 400;
  font-size: 40px;
`;

export const SecondTittle = styled.h1`
  font-weight: 700;
  font-size: 70px;
  color: #1f76f0;
`;

export const ColoredLine = styled.hr`
  border: none;
  color: #d9d9d9;
  background-color: #d9d9d9;
  height: 1px;
  width: 10%;
`;

export const Description = styled.h4`
  font-weight: 500;
  font-size: 14px;
`;

export const Logo = styled(Image)`
  position: absolute;
  transform: translate(-65%, +10%);
`;
