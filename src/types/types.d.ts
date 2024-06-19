import React, { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}
interface Theme {
  initialTheme: string;
}
export interface art {
  objeto: React.ReactNode;
  nome: string;
  subtitulo: string;
}

export type PageTheme = "dark" | "light";
