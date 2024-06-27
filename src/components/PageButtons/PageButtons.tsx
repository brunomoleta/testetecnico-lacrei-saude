import React from "react";
import Button from "@/components/Button";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import { Buttons } from "@/components/Hero/Hero.style";

function PageButtons() {
  return (
    <Buttons>
      <Button href="/selecionar-pessoa" btnType="primary">
        {selecionarPessoaData.buttonOne}
      </Button>
      <Button href="/selecionar-pessoa" btnType="secondary">
        {selecionarPessoaData.buttonTwo}
      </Button>
    </Buttons>
  );
}

export default PageButtons;
