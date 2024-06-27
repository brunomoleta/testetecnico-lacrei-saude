import React from "react";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import HeadingOne from "@/components/Hero/HeadingOne";
import { PageParagraph } from "@/components/Hero/Hero.style";

function PageDescription() {
  return (
    <>
      <HeadingOne isLandingPage={false} />
      <PageParagraph>{selecionarPessoaData.description}</PageParagraph>
    </>
  );
}

export default PageDescription;
