import React from "react";
import { ChildrenProps } from "@/types/types";
import Logo from "@/components/Logo";
import { HeaderWrapper } from "@/components/Header/Header.style";

function Header({ children }: ChildrenProps) {
  const id = React.useId();
  return (
    <header style={{ backgroundColor: "var(--color-background)" }}>
      <HeaderWrapper id={`${id}-header`}>
        <Logo />
        {children}
      </HeaderWrapper>
    </header>
  );
}

export default Header;
