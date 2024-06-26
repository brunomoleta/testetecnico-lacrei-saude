import React from "react";

import { NavStyled } from "@/components/Header/HeaderNav/HeaderNav.style";
import NavDesktop from "@/components/Header/HeaderNav/NavDesktop";
import NavMobile from "@/components/Header/HeaderNav/NavMobile";

function HeaderNav() {
  return (
    <nav>
      <NavStyled>
        <NavDesktop />
        <NavMobile />
      </NavStyled>
    </nav>
  );
}

export default HeaderNav;
