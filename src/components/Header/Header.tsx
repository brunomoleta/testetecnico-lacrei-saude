import React from "react";
import Logo from "@/components/Logo";
import {HeaderWrapper, StyledHeader} from "@/components/Header/Header.style";
import HeaderNav from "@/components/Header/HeaderNav";

function Header() {
  const id = React.useId();
  return (
    <StyledHeader>
      <HeaderWrapper id={`${id}-header`}>
        <Logo />
        <HeaderNav/>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
