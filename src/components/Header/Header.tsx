import React from "react";
import { ChildrenProps } from "@/types/types";
import Logo from "@/components/Logo";

function Header({ children }: ChildrenProps) {
  return (
    <header>
      <Logo />
      {children}
    </header>
  );
}

export default Header;
