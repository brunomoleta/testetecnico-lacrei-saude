import Brand from "../../assets/logo.png";
import React from "react";
import { LogoLink, LogoStyle } from "@/components/Logo/Logo.style";

function Logo() {
  return (
    <LogoLink href="/">
      <LogoStyle width={190} src={Brand} alt="Lacrei Saúde" />
    </LogoLink>
  );
}

export default Logo;
