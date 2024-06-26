"use client";
import Arrow from "../../../assets/arrow_up.svg";
import React from "react";
import { Warning } from "@/components/Footer/Footer.style";
import {
  WarningContainer,
  Wrapper,
} from "@/components/Footer/PsFooter/PsFooter.style";
import { footerData } from "@/data/footer";
import Button from "@/components/Button";
import Image from "next/image";
import { HideAtMobile } from "@/styled-components/General.style";
import Balancer from "react-wrap-balancer";

function PsFooter() {
  return (
    <>
      <Wrapper>
        <WarningContainer>
          <HideAtMobile>
            <Balancer>
              <Warning>{footerData.bottom.first}</Warning>
            </Balancer>
          </HideAtMobile>
          <Balancer>
            <Warning>{footerData.bottom.second}</Warning>
          </Balancer>
        </WarningContainer>

        <Button href={"#top"} btnType={"button"}>
          <Image alt="botão para voltar ao topo da página" src={Arrow} />
        </Button>
      </Wrapper>
    </>
  );
}

export default PsFooter;
