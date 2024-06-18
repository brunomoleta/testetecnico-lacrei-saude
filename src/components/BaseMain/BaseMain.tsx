import React from "react";
import { ChildrenProps } from "@/types/types";

function BaseMain({ children }: ChildrenProps) {
  return <main>{children}</main>;
}

export default BaseMain;
