import type { Metadata } from "next";
import '@fontsource-variable/nunito';
import {Providers} from "@/providers/Providers";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BaseMain from "@/components/BaseMain";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Teste técnico de Bruno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
    <Providers>
      <Header>
        <DarkLightToggle initialTheme={theme}/>
      </Header>
      <BaseMain>{children}</BaseMain>
      <Footer/>
    </Providers>
    </body>
  );
}
