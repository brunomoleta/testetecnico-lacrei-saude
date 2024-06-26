import React from "react";
import { FooterWrapper, Line } from "@/components/Footer/Footer.style";
import PsFooter from "@/components/Footer/PsFooter";
import { Container } from "@/components/BottomFooter/BottomFooter.style";
import { HideAtMobile } from "@/styled-components/General.style";

function BottomFooter() {
  return (
    <Container>
      <HideAtMobile>
        <Line />
      </HideAtMobile>
      <FooterWrapper>
        <PsFooter />
      </FooterWrapper>
    </Container>
  );
}

export default BottomFooter;
