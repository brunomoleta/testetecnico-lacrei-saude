import React from "react";
import Hero from "@/components/Hero";
import ArtContainer from "@/components/ArtContainer";
import {
  NextPageMobile,
  Wrapper,
} from "@/components/ArtWrapperDefault/Default.style";

function ArtWrapperDefault() {
  return (
    <Wrapper>
      <Hero />
      <ArtContainer />
      <NextPageMobile href="/pride">Ir para próxima página</NextPageMobile>
    </Wrapper>
  );
}

export default ArtWrapperDefault;
