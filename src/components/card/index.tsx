import * as S from "./styles";
import thumbnail from "../../assets/thumbnail.png";
import { BsPlayFill } from "react-icons/bs";

interface PropsCard {
  url: string;
  description: string;
}

const Card: React.FC<PropsCard> = ({ description, url }) => {
  return (
    <S.Container href={url} target="_blank">
      <S.ThumbnailWrapper>
        <S.Thumbnail src={thumbnail} alt="thumbnail" />
        <S.Icon size={100} />
      </S.ThumbnailWrapper>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default Card;
