import Brand from "../../assets/logo/logo.png";
import BrandFooter from "../../assets/logo/logo-footer.svg";
import React from "react";
import { LogoLink, LogoStyle } from "@/components/Logo/Logo.style";

function Logo({ isHeader = true }: { isHeader: boolean }) {
  return (
    <LogoLink href="/">
      <LogoStyle
        width={190}
        src={isHeader ? Brand : BrandFooter}
        alt="Lacrei Saúde"
      />
    </LogoLink>
  );
}

export default Logo;
