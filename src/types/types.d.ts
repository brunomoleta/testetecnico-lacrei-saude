import React, { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export type ButtonType = "primary" | "secondary" | "basic"