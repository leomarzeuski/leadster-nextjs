import * as S from "./styles";
import thumbnail from "../../assets/thumbnail.png";
import { BsPlayFill } from "react-icons/bs";
import Modal from "../modal";
import { useState } from "react";

interface PropsCard {
  url: string;
  description: string;
  modal: {
    title: string;
    url: string;
    description: string;
    downloadUrl: string;
  };
}

const Card: React.FC<PropsCard> = ({ description, url, modal }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <S.Container onClick={handleOpen}>
        <S.ThumbnailWrapper>
          <S.Thumbnail src={thumbnail} alt="thumbnail" />
          <S.Icon size={100} />
        </S.ThumbnailWrapper>
        <S.Description>{description}</S.Description>
      </S.Container>
      <Modal data={modal} onClose={handleClose} open={open} />
    </>
  );
};

export default Card;
