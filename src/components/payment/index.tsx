import * as S from "./styles";
import comparativo from "../../assets/comparativo.png";
import rd from "../../assets/rd.png";
import card from "../../assets/no-card-dark.webp";
import star from "../../assets/rating.webp";

const Payment: React.FC = () => {
  return (
    <S.PaymentContainer>
      <S.Logo src={comparativo} alt="logo" />
      <S.Container>
        <S.Headline>
          Pronto para triplicar sua <S.BoldText>Geração de Leads?</S.BoldText>
        </S.Headline>
        <S.SubHeadLine>
          Criação e ativação em <S.BoldText>4 minutos.</S.BoldText>{" "}
        </S.SubHeadLine>
        <S.ButtonContainer>
          <S.Button>VER DEMONSTRAÇÃO</S.Button>
          <S.Logo src={rd} alt="logo" />
        </S.ButtonContainer>
        <div>
          <div>
            <S.Text>
              <S.Logo src={card} alt="logo" />
              <b> Não</b> é necessário cartão de crédito |{" "}
              <S.Logo src={star} alt="logo" />
              <b>4.9</b>/5 - Média de Satisfação
            </S.Text>
          </div>
        </div>
      </S.Container>
    </S.PaymentContainer>
  );
};

export default Payment;
