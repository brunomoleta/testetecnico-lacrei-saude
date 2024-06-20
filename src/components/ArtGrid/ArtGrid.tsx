import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Container, Line } from "@/components/ArtGrid/ArtGrid.style";
import ArtWrapperDesktop from "@/components/ArtWrapperDesktop";
import ArtWrapperDefault from "@/components/ArtWrapperDefault";
function ArtGrid() {
  return (
    <>
      <Container>
        <ArtWrapperDefault />
        <ArtWrapperDesktop />
      </Container>
      <Line />
    </>
  );
}

export default ArtGrid;
