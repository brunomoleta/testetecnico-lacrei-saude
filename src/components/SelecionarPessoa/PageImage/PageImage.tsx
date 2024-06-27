import React from "react";
import {
  ImageWrapper,
  PeopleImg,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";
import People from "@/assets/pexels-shkrabaanthony-5214997.jpg";

function PageImage() {
  return (
    <ImageWrapper>
      <PeopleImg
        fill={true}
        src={People}
        alt="Imagem de uma profissional da saúde orientando uma paciente"
      />
    </ImageWrapper>
  );
}

export default PageImage;
