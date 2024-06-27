import React from "react";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import HeadingOne from "@/components/Hero/HeadingOne";
import { PageParagraph } from "@/components/Hero/Hero.style";

function PageDescription() {
  return (
    <>
      <HeadingOne page="select-person" />
      <PageParagraph>{selecionarPessoaData.description}</PageParagraph>
    </>
  );
}

export default PageDescription;
