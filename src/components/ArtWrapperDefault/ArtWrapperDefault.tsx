import React from "react";
import Hero from "@/components/Hero";
import ArtContainer from "@/components/ArtContainer";
import {
  NextPageMobile,
  Wrapper,
} from "@/components/ArtWrapperDefault/Default.style";

function ArtWrapperDefault() {
  const id = React.useId();
  return (
    <Wrapper>
      <Hero />
      <ArtContainer />
      <NextPageMobile id={`${id}-nextpage`} href="/pride">
        Ir para próxima página
      </NextPageMobile>
    </Wrapper>
  );
}

export default ArtWrapperDefault;
