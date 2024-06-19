import React from "react";
import { ChildrenProps } from "@/types/types";
import Logo from "@/components/Logo";
import { HeaderWrapper } from "@/components/Header/Header.style";

function Header({ children }: ChildrenProps) {
  return (
    <header>
      <HeaderWrapper>
        <Logo />
        {children}
      </HeaderWrapper>
    </header>
  );
}

export default Header;
