import React from "react";
import Button from "@/components/Button";
import { Wrapper } from "@/components/Header/HeaderNav/NavDesktop/NavDesktop.style";
import { help, pessoaLink, quemSomos } from "@/data/headerData";

function NavDesktop() {
  return (
    <Wrapper>
      <li>
        <Button href={quemSomos} btnType="basic">
          Quem somos
        </Button>
      </li>
      <li>
        <Button href={help} btnType="basic">
          Ajuda
        </Button>
      </li>
      <li>
        <Button href={pessoaLink} btnType="primary">
          Entrar
        </Button>
      </li>
    </Wrapper>
  );
}

export default NavDesktop;
