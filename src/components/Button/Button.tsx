import React from "react";
import { ButtonType } from "@/types/types";
import {
  BtnBasic,
  BtnIcon,
  BtnPrimary,
  BtnSecondary,
} from "@/components/Button/Button.style";

import { FC, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  btnType: ButtonType;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({ btnType, children, ...props }) => {
  switch (btnType) {
    case "button":
      return <BtnIcon {...props}>{children}</BtnIcon>;
    case "secondary":
      return <BtnSecondary {...props}>{children}</BtnSecondary>;
    case "basic":
      return <BtnBasic {...props}>{children}</BtnBasic>;
    default:
      return <BtnPrimary {...props}>{children}</BtnPrimary>;
  }
};

export default Button;
