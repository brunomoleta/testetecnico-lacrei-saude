import React from "react";

import {
  FooterStyled,
  FooterWrapper,
  Line,
} from "@/components/Footer/Footer.style";

import TopFooter from "@/components/Footer/TopFooter";
import PsFooter from "@/components/Footer/PsFooter";

function Footer() {
  return (
    <FooterStyled>
      <FooterWrapper>
        <TopFooter />
      </FooterWrapper>
      <Line />
      <FooterWrapper>
        <PsFooter />
      </FooterWrapper>
    </FooterStyled>
  );
}

export default Footer;
