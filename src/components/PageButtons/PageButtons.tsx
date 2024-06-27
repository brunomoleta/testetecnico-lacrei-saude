import React from "react";
import Button from "@/components/Button";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import { Buttons } from "@/components/Hero/Hero.style";
import { pessoaLink } from "@/data/headerData";

function PageButtons() {
  return (
    <Buttons>
      <Button href={pessoaLink} btnType="primary">
        {selecionarPessoaData.buttonOne}
      </Button>
      <Button href={pessoaLink} btnType="secondary">
        {selecionarPessoaData.buttonTwo}
      </Button>
    </Buttons>
  );
}

export default PageButtons;
