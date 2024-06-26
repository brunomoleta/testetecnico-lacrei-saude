import Help from "../../../../assets/icons/help.svg"
import User from "../../../../assets/icons/person.svg"
import React from 'react';

import Button from "@/components/Button";
import Image from "next/image";
import {Wrapper} from "@/components/Header/HeaderNav/NavMobile/NavMobile.style";

function NavMobile() {
  return <Wrapper>
    <li>
      <Button href={"/"} btnType="basic">
        <Image src={Help} alt="Ajuda" />
      </Button>
    </li>
    <li>
      <Button href={"/selecionar-pessoa"} btnType="primary">
        <Image src={User} alt="Entrar" />
      </Button>
    </li>
  </Wrapper>;
}

export default NavMobile;
