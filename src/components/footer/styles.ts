// components/styles.ts
import styled from "styled-components";
import Image from "next/image";

export const FooterContainer = styled.footer``;

export const FooterTop = styled.div``;

export const Branding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: rgb(103, 114, 148);
  font-weight: 500;
  padding: 20px;
`;

export const Logo = styled(Image)`
  height: 4em;
  width: auto;
`;

export const FooterMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  color: rgb(103, 114, 148);

  p:hover {
    color: #1f76f0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Description = styled.p``;

export const FooterBottom = styled.div`
  border-top: solid 1px #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: rgb(103, 114, 148);
  padding: 20px;
  font-size: 14px;

  a {
    color: #2c83fb;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CopyRight = styled.p``;

export const FooterMenu = styled.ul``;

export const Widget = styled.div``;

export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  font-size: 13px;
  margin-bottom: 2px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li``;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c83fb;
  }

  & img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }
`;

export const WidgetWrap = styled.div`
  margin-top: 2px;
`;

export const Contact = styled.p`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const ClickableText = styled.p`
  color: #2c83fb;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;
