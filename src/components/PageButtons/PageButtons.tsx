import React from "react";
import Button from "@/components/Button";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import { Buttons } from "@/components/Hero/Hero.style";
import { paciente, profissional } from "@/data/headerData";

function PageButtons() {
  return (
    <Buttons>
      <Button href={paciente} btnType="primary">
        {selecionarPessoaData.buttonOne}
      </Button>
      <Button href={profissional} btnType="secondary">
        {selecionarPessoaData.buttonTwo}
      </Button>
    </Buttons>
  );
}

export default PageButtons;
