import * as S from "./styles";
import assetheader from "@/assets/asset-header.png";

const Hero = () => {
  return (
    <S.HeroSection>
      <S.WebinarBox>WEBINARES EXCLUSIVOS</S.WebinarBox>
      <S.FirstTittle>Menos Conversinha,</S.FirstTittle>
      <S.SecondTittle>
        Mais Conversão <S.Logo src={assetheader} alt="Logo" />
      </S.SecondTittle>
      <S.ColoredLine />
      <S.Description>
        Conheça as estratégias que{" "}
        <span style={{ fontWeight: "bold" }}>mudaram o jogo</span> e como
        aplicá-las no seu negócio
      </S.Description>
    </S.HeroSection>
  );
};

export default Hero;
