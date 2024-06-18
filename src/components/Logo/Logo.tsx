import Brand from "../../assets/logo.png";
import React from "react";
import { LogoStyle } from "@/components/Logo/Logo.style";

function Logo() {
  return <LogoStyle width={300} src={Brand} alt="Lacrei Saúde" />;
}

export default Logo;
