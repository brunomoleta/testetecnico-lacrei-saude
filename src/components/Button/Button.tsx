import React from 'react';
import {ButtonType} from "@/types/types";
import {BtnBasic, BtnPrimary, BtnSecondary} from "@/components/Button/Button.style";
import {uppercaseWord} from "@/utils/utils";


function Button({btnType, children}:{btnType: ButtonType, children: string}) {
  const uppercasedChildren = uppercaseWord(children)
  switch (btnType) {
    case "primary":
      return <BtnPrimary>{uppercasedChildren}</BtnPrimary>;
    case "secondary":
      return <BtnSecondary>{uppercasedChildren}</BtnSecondary>;
    case "basic":
      return <BtnBasic>{uppercasedChildren}</BtnBasic>;
    default:
      return null;
  }
}

export default Button;
