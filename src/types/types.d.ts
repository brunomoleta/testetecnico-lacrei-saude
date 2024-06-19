import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}
interface Theme {
  initialTheme: string;
}

export type PageTheme = "dark" | "light";
