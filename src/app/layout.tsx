import type { Metadata } from "next";
import "@fontsource-variable/nunito";
import { Providers } from "@/providers/Providers";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BaseMain from "@/components/BaseMain";
import React from "react";

export const metadata: Metadata = {
  title: "Início | Lacrei Saúde",
  description: "Teste técnico de Bruno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // @ts-ignore
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header/>
          <BaseMain>{children}</BaseMain>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
