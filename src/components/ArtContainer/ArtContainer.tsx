import React from "react";
import {
  Info,
  Subtitle,
  TextWrap,
  Title,
} from "@/components/ArtGrid/ArtGrid.style";
import ArtModal from "@/components/ArtModal";
import { art } from "@/types/types";
import { illustrations } from "@/utils/ArtList";
import { Container } from "@/components/ArtContainer/ArtContainer.style";

function ArtContainer() {
  return illustrations.map((art: art, index: number) => (
    <Container key={index}>
      {art.objeto}
      <Info>
        <TextWrap>
          <Title>{art.nome}</Title>
          <Subtitle>{art.subtitulo}</Subtitle>
        </TextWrap>
        <ArtModal art={art} />
      </Info>
    </Container>
  ));
}

export default ArtContainer;
