import * as S from "./styles";
import btn_doc from "@/assets/btn_doc.png";
import btn_ppt from "@/assets/btn_ppt.png";
import btn_xls from "@/assets/btn_xls.png";
import Image from "next/image";
interface ModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    title: string;
    url: string;
    description: string;
    downloadUrl: string;
  };
}

const Modal: React.FC<ModalProps> = ({ open, onClose, data }) => {
  if (!open) return null;

  if (!data) return;

  function ColoredText(text: string) {
    const parts = text.split(/({[^}]*})/g);

    return (
      <span>
        {parts.map((part, index) =>
          part.startsWith("{") && part.endsWith("}") ? (
            <span key={index} style={{ color: "#1f76f0" }}>
              {part.slice(1, -1)}
            </span>
          ) : (
            <span key={index} style={{ color: "gray" }}>
              {part}
            </span>
          )
        )}
      </span>
    );
  }

  return (
    <S.ModalBackground>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.ModalHeader>
          <S.ModalTitle>{ColoredText(data.title)}</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalSection>
          <iframe
            style={{ width: "-webkit-fill-available" }}
            height="315"
            src={data.url}
            allowFullScreen
          />
        </S.ModalSection>
        <S.ModalSection margin="0 20px">
          <S.TextDivider>Descrição</S.TextDivider>
          <p>{data.description}</p>
        </S.ModalSection>

        <S.ModalSection margin="0 20px">
          <S.TextDivider>Download</S.TextDivider>
          <S.ModalImages>
            <Image src={btn_xls} alt="" />
            <Image src={btn_doc} alt="" />
            <Image src={btn_ppt} alt="" />
          </S.ModalImages>
        </S.ModalSection>
      </S.ModalContent>
    </S.ModalBackground>
  );
};

export default Modal;
