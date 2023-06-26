import { useState } from "react";
import logo from "@/assets/logo.png";
import * as S from "./styles";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="Logo" />
      <S.MenuIcon open={isOpen} onClick={handleMenuClick} />
    </S.HeaderContainer>
  );
};

export default Header;
