"use client";
import React from "react";
import { DARK_COLORS, LIGHT_COLORS } from "@/styled-components/colors.style";
import { PageTheme, Theme } from "@/types/types";
import { formattedDate } from "@/utils/utils";
import { setCookie } from "cookies-next";
import {
  Buttons,
  Day,
  Night,
  Wrapper,
} from "@/components/DarkLightMode/DarkLightMode.style";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function DarkLightMode({ initialTheme }: Theme) {
  const id = React.useId();
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick(isLight: boolean) {
    const theme: PageTheme = isLight ? "light" : "dark";
    const colors = isLight ? LIGHT_COLORS : DARK_COLORS;

    setTheme(theme);
    setCookie("color-theme", theme, { expires: formattedDate });

    const root = document.documentElement;

    root.setAttribute("data-color-theme", theme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <Wrapper id={`${id}-darkLight-mode-wrapper`}>
      <span>Modo de visualização:</span>
      <Buttons>
        <Day
          id={`${id}-switch-color-theme-light`}
          onClick={() => handleClick(true)}
        >
          Dia <SunIcon />
        </Day>
        <Night
          id={`${id}-switch-color-theme-dark`}
          onClick={() => handleClick(false)}
        >
          Noite <MoonIcon />
        </Night>
      </Buttons>
    </Wrapper>
  );
}

export default DarkLightMode;
