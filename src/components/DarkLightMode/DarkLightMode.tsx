"use client";
import React from "react";
import { DARK_COLORS, LIGHT_COLORS } from "@/styled-components/colors.style";
import { PageTheme, Theme } from "@/types/types";
import { formattedDate } from "@/utils/utils";
import { setCookie } from "cookies-next";

function DarkLightMode({ initialTheme }: Theme) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const newTheme: PageTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    setCookie("color-theme", newTheme, { expires: formattedDate });

    const root = document.documentElement;
    const colors = newTheme === "dark" ? DARK_COLORS : LIGHT_COLORS;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <>
      <span>Modo de visualização:</span>
      <button onClick={handleClick}>Dia</button>
      <button onClick={handleClick}>Noite</button>
    </>
  );
}

export default DarkLightMode;
