import * as S from "./styles";

const Select: React.FC = () => {
  return (
    <S.Container>
      <S.ResponsiveSelect>
        <option value="agencies">Agências</option>
        <option value="chatbot">Chatbot</option>
        <option value="digitalMarketing">Marketing Digital</option>
        <option value="leadGeneration">Geração de Leads</option>
        <option value="paidMedia">Mídia Paga</option>
      </S.ResponsiveSelect>
      <S.Select>
        <option value="date">Data de publicação</option>
        <option value="other">Outras opções</option>
      </S.Select>
    </S.Container>
  );
};

export default Select;
