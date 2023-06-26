import * as S from "./styles";

const Select: React.FC = () => {
  return (
    <div>
      <label>Ordenar por: </label>
      <S.Select>
        <option value="date">Data de publicação</option>
        <option value="other">Outras opções</option>
      </S.Select>
    </div>
  );
};

export default Select;
