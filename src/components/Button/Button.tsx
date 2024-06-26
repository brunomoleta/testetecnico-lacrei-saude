import React from "react";
import { ButtonType } from "@/types/types";
import {
  BtnBasic,
  BtnIcon,
  BtnPrimary,
  BtnSecondary,
} from "@/components/Button/Button.style";

type ButtonProps = {
  btnType: ButtonType;
  children: React.ReactNode;
  href: string
};

const Button = ({href, btnType, children} : ButtonProps) => {
  switch (btnType) {
    case "button":
      return <BtnIcon href={href}>{children}</BtnIcon>;
    case "secondary":
      return <BtnSecondary href={href}>{children}</BtnSecondary>;
    case "basic":
      return <BtnBasic href={href}>{children}</BtnBasic>;
    default:
      return <BtnPrimary href={href}>{children}</BtnPrimary>;
  }
};

export default Button;
