import React from "react";
import {
  Heading,
  Line,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";
import MainParagraph from "@/components/MainParagraph";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";

function PageDescription() {
  return (
    <>
      <Heading as="h1">
        Junte-se à nossa&nbsp;comunidade
        <Line />
      </Heading>

      <MainParagraph>{selecionarPessoaData.description}</MainParagraph>
    </>
  );
}

export default PageDescription;
