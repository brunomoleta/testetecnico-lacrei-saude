import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import {
  ArtContainer,
  Container,
  Info,
  TextWrap,
} from "@/components/ArtGrid/ArtGrid.style";
import { illustrations } from "@/utils/ArtList";
import Hero from "@/components/Hero";
import { art } from "@/types/types";

function ArtGrid() {
  const settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    centerMode: true,

    arrows: true,
    variableWidth: true,
  };
  return (
    <Container>
      <ArtContainer {...settings}>
        <Hero />
        {illustrations.map((art: art, index) => (
          <div key={index}>
            {art.objeto}
            <Info>
              <TextWrap>
                <h3>{art.nome}</h3>
                <p>{art.subtitulo}</p>
              </TextWrap>
              <button>Ampliar</button>
            </Info>
          </div>
        ))}
      </ArtContainer>
    </Container>
  );
}

export default ArtGrid;
