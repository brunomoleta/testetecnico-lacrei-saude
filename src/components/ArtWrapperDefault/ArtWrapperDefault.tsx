import React from "react";
import Hero from "@/components/Hero";
import ArtContainer from "@/components/ArtContainer";
import {
  NextPageMobile,
  Wrapper,
} from "@/components/ArtWrapperDefault/Default.style";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function ArtWrapperDefault() {
  const id = React.useId();
  return (
    <Wrapper>
      <Hero />
      <ArtContainer />
      <NextPageMobile id={`${id}-nextpage`} href="/pride">
        Ir para próxima página
        <ArrowRightIcon />
      </NextPageMobile>
    </Wrapper>
  );
}

export default ArtWrapperDefault;
