import React from 'react';
import Button from "@/components/Button";
import {NavStyled} from "@/components/Header/HeaderNav/HeaderNav.style";

function HeaderNav() {
  return <nav>
    <NavStyled>
      <li>
        <Button btnType="basic" >Quem somos</Button>
      </li>
      <li>
        <Button btnType="basic" >Ajuda</Button>
      </li>
      <li>
        <Button btnType="primary" >entrar</Button>
      </li>
    </NavStyled>
  </nav>;
}

export default HeaderNav;
