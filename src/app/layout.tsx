import type { Metadata } from "next";
import "@fontsource-variable/nunito";
import { Providers } from "@/providers/Providers";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BaseMain from "@/components/BaseMain";
import { cookies } from "next/headers";
import { DARK_COLORS, LIGHT_COLORS } from "@/styled-components/colors.style";
import DarkLightMode from "@/components/DarkLightMode";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Teste técnico de Bruno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";
  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;

  return (
    // @ts-ignore
    <html lang="pt-BR" data-color-theme={theme} style={themeColors}>
      <body>
        <Providers>
          <Header>
            <DarkLightMode initialTheme={theme} />
          </Header>
          <BaseMain>{children}</BaseMain>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
