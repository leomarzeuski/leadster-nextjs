import { useState } from "react";
import * as S from "./styles";
import React from "react";

interface PropButton {
  label: string;
}

const Button: React.FC<PropButton> = ({ label }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleClick = () => {
    setIsPressed((previousState) => !previousState);
  };

  return (
    <S.Button onClick={handleClick} isPressed={isPressed}>
      {label}
    </S.Button>
  );
};

export default Button;
