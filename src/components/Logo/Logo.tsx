import BrandMobile from "../../assets/logo/Logo-mobile.svg";
import Brand from "../../assets/logo/logo.png";
import BrandFooter from "../../assets/logo/logo-footer.svg";
import React from "react";
import {
  LogoDesktop,
  LogoMobile,
  LogoStyle,
} from "@/components/Logo/Logo.style";

function Logo({
  isHeader = true,
  isMobile = false,
}: {
  isHeader: boolean;
  isMobile?: boolean;
}) {
  const ResponsiveLogo = () => {
    if (isMobile)
      return (
        <LogoMobile href="/">
          <LogoStyle width={135} alt="Lacrei Saúde" src={BrandMobile} />
        </LogoMobile>
      );
    else {
      return (
        <LogoDesktop href="/">
          <LogoStyle
            width={190}
            src={isHeader ? Brand : BrandFooter}
            alt="Lacrei Saúde"
          />
        </LogoDesktop>
      );
    }
  };
  return <ResponsiveLogo />;
}

export default Logo;
