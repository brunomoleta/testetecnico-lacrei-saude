import React from "react";
import { ChildrenProps } from "@/types/types";
import { MainWrapper } from "@/components/BaseMain/BaseMain.styles";

function BaseMain({ children }: ChildrenProps) {
  return <MainWrapper>{children}</MainWrapper>;
}

export default BaseMain;
