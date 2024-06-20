import React from "react";
import Hero from "@/components/Hero";
import ArtContainer from "@/components/ArtContainer";
import { ArtWrapper } from "@/components/ArtGrid/ArtGrid.style";

function ArtWrapperDesktop() {
  const settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    centerMode: true,

    arrows: true,
    variableWidth: true,
  };
  return (
    <ArtWrapper {...settings}>
      <Hero />
      <ArtContainer />
    </ArtWrapper>
  );
}

export default ArtWrapperDesktop;
