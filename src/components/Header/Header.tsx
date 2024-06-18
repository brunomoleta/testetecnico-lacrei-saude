import React from "react";
import { ChildrenProps } from "@/styled-components/types/types";

function Header({ children }: ChildrenProps) {
  return <header>{children}</header>;
}

export default Header;
