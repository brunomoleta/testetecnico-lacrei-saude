"use client";
import Arrow from "../../../assets/keyboard_arrow_up_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import React from "react";
import { Warning } from "@/components/Footer/Footer.style";
import { Wrapper } from "@/components/Footer/PsFooter/PsFooter.style";
import { footerData } from "@/data/footer";
import Button from "@/components/Button";
import Image from "next/image";


function PsFooter() {
  return (
    <>
      <Wrapper>
        <Warning>{footerData.bottom.first}</Warning>
        <Warning>{footerData.bottom.second}</Warning>
        <Button href={"#top"} btnType={"button"}>
          <Image alt="botão para voltar ao topo da página" src={Arrow} />
        </Button>
      </Wrapper>
    </>
  );
}

export default PsFooter;
