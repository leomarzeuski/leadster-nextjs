import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export const HeaderContainer = styled.header`
  height: 6.5em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

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
    width: 100%;
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
