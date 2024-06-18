import React from "react";
import { ChildrenProps } from "@/styled-components/types/types";

function BaseMain({ children }: ChildrenProps) {
  return <main>{children}</main>;
}

export default BaseMain;
