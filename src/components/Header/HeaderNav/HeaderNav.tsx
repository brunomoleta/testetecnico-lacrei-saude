import React from "react";
import Button from "@/components/Button";
import { NavStyled } from "@/components/Header/HeaderNav/HeaderNav.style";

function HeaderNav() {
  return (
    <nav>
      <NavStyled>
        <li>
          <Button href={"/"} btnType="basic">Quem somos</Button>
        </li>
        <li>
          <Button href={"/"} btnType="basic">Ajuda</Button>
        </li>
        <li>
          <Button href={"/selecionar-pessoa"} btnType="primary">Entrar</Button>
        </li>
      </NavStyled>
    </nav>
  );
}

export default HeaderNav;
