import React from "react";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import HeadingOne from "@/components/Hero/HeadingOne";
import { PageParagraph } from "@/components/Hero/Hero.style";
import Balancer from "react-wrap-balancer";

function PageDescription() {
  return (
    <>
      <HeadingOne page="select-person" />
        <PageParagraph><Balancer>{selecionarPessoaData.description}</Balancer></PageParagraph>
    </>
  );
}

export default PageDescription;
