import React from "react";

import {
  FooterStyled,
  FooterWrapper,
  Line,
} from "@/components/Footer/Footer.style";

import TopFooter from "@/components/Footer/TopFooter";
import BottomFooter from "@/components/BottomFooter";

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
