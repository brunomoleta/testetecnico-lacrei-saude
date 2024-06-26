import React from "react";
import Button from "@/components/Button";
import { Wrapper } from "@/components/Header/HeaderNav/NavDesktop/NavDesktop.style";

function NavDesktop() {
  return (
    <Wrapper>
      <li>
        <Button href={"/"} btnType="basic">
          Quem somos
        </Button>
      </li>
      <li>
        <Button href={"/"} btnType="basic">
          Ajuda
        </Button>
      </li>
      <li>
        <Button href={"/selecionar-pessoa"} btnType="primary">
          Entrar
        </Button>
      </li>
    </Wrapper>
  );
}

export default NavDesktop;
