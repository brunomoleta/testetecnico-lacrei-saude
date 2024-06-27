import React from "react";

import {FooterStyled, FooterWrapper,} from "@/components/Footer/Footer.style";

import TopFooter from "@/components/Footer/TopFooter";
import BottomFooter from "./BottomFooter";

function Footer() {
  return (
    <FooterStyled>
      <FooterWrapper>
        <TopFooter />
      </FooterWrapper>
      <BottomFooter />
    </FooterStyled>
  );
}

export default Footer;
