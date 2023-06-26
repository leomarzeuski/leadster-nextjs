import Button from "../button";
import Select from "../select";
import * as S from "./styles";

const FilterArea: React.FC = () => {
  return (
    <S.FilterContainer>
      <Button label="Agências" />
      <Button label="Chatbot" />
      <Button label="MarketingDigital" />
      <Button label="Geração de Leads" />
      <Button label="Mídia Paga" />
      <Select />
    </S.FilterContainer>
  );
};
export default FilterArea;
