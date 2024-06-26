import React from "react";
import { HeroParagraph } from "@/components/Hero/Hero.style";
import Balancer from "react-wrap-balancer";

function MainParagraph({ children }: { children: React.ReactNode }) {
  return (
    <HeroParagraph>
      <Balancer>{children}</Balancer>
    </HeroParagraph>
  );
}

export default MainParagraph;
