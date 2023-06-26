import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 6.5em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const Logo = styled(Image)`
  height: 2.15em;
  width: auto;
`;

export const MenuIcon = styled(AiOutlineMenu)<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    z-index: 1;
    width: auto;
    height: 40px;
    color: blue;
    cursor: pointer;
  }

  ${({ open }) =>
    open &&
    css`
      transform: rotate(90deg);

      &::before {
        transform: rotate(-90deg);
        top: 0;
      }

      &::after {
        transform: rotate(90deg);
        bottom: 0;
      }
    `}
`;
