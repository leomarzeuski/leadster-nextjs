import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 111;
  @media (min-width: 768px) {
    overflow: auto;
  }
`;

export const ModalContent = styled.div`
  border-top: solid 4px blue;
  width: 90%;
  max-width: 600px;
  height: auto;
  max-height: 100vh; // Novo: Definir a altura máxima como a altura da janela de visualização
  overflow: auto; // Novo: permitir rolagem dentro do ModalContent
  background-color: white;
  border-radius: 10px;
  z-index: 111;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  margin: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ModalTitle = styled.h2`
  color: blue;
  text-align: center;
  padding: 0 50px;
  margin-bottom: 25px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: gray;
  font-weight: 500;
  font-size: medium;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: auto;
  margin-bottom: 0;
`;

export const TextDivider = styled.h3`
  border-bottom: 1px solid gray;
`;

export const ModalSection = styled.section<{ margin?: string }>`
  margin-bottom: 20px;
  ${({ margin }) => margin && `margin: ${margin}`}
`;

export const ModalImages = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;
