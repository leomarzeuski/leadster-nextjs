// components/Footer.tsx
import React from "react";
import * as S from "./styles";
import logo from "../../assets/leadster_270.gif";
import Image from "next/image";
import facebook from "../../assets/simbolo-de-aplicativo-do-facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const content = [
  {
    title: "Links Principais",
    itens: ["Home", "Ferramenta", "Preços", "Contato"],
  },
  ,
  {
    title: "Cases",
    itens: [
      "Geração de Leads B2B",
      "Geração de Leads em Software",
      "Geração de Leads em Imobiliária",
      "Cases de Sucesso",
    ],
  },
  {
    title: "Materiais",
    itens: [
      "Blog",
      "Parceria com Agências",
      "Guia Definitivo do Marketing",
      "Materiais Gratuitos",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.Branding>
          <S.Logo src={logo} alt="Logo" />
          <S.Description>Transformando visitantes em clientes.</S.Description>
        </S.Branding>
      </S.FooterTop>
      <S.FooterMiddle>
        <S.Content>
          {content.map((element, index) => (
            <div key={index}>
              <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                {element?.title}
              </h5>
              <>
                {element?.itens.map((item, index) => (
                  <p style={{ fontSize: "16px", padding: "5px" }} key={index}>
                    {item}
                  </p>
                ))}
              </>
            </div>
          ))}
          <S.Widget>
            <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
              Siga a Leadster
            </h5>
            <S.SocialContainer>
              <S.SocialIcon
                target="_blank"
                href="https://www.linkedin.com/company/leadster-platform/"
              >
                <Image src={linkedin} alt="Logo" width={20} height={20} />
              </S.SocialIcon>
              <S.SocialIcon
                target="_blank"
                href="https://www.facebook.com/leadsterplatform"
              >
                <Image src={facebook} alt="Logo" width={20} height={20} />
              </S.SocialIcon>
              <S.SocialIcon
                target="_blank"
                href="https://www.instagram.com/leadster.com.br/"
              >
                <Image src={instagram} alt="Logo" width={20} height={20} />
              </S.SocialIcon>
            </S.SocialContainer>
            <S.WidgetWrap>
              <S.Contact>
                <strong>E-mail:</strong> contato@leadster.com.br
              </S.Contact>
              <S.Contact>
                <strong>Telefone:</strong> (42) 98828-9851
              </S.Contact>
              <S.ClickableText>Clique e fale conosco</S.ClickableText>
            </S.WidgetWrap>
          </S.Widget>
        </S.Content>
      </S.FooterMiddle>
      <S.FooterBottom>
        <S.CopyRight>
          Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
          <a href="#">Leadster</a>
        </S.CopyRight>
        <S.CopyRight>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
          <a href="#">Termos de uso</a> | <a href="#">Privacidade</a>
        </S.CopyRight>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
