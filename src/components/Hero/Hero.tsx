import HeroImage from "../../assets/hero.jpg";
import React from "react";

import {
  Buttons,
  HeroHeading,
  HeroInfo,
  Highlight,
  ImageWrapper,
  MainImage,
  Wrapper,
} from "@/components/Hero/Hero.style";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Button from "@/components/Button";
import { hero } from "@/data/hero";
import MainParagraph from "@/components/MainParagraph";

function Hero() {
  const id = React.useId();
  return (
    <>
      <Wrapper id={`${id}-hero}`}>
        <ImageWrapper>
          <MainImage src={HeroImage} layout="fill" alt={""} />
        </ImageWrapper>
        <VisuallyHidden>
          <h1>{hero.h1}</h1>
        </VisuallyHidden>
        <HeroInfo>
          <HeroHeading>Olá, você está na&nbsp;Lacrei&nbsp;Saúde!</HeroHeading>
          <MainParagraph>
              Conectamos pessoas <Highlight>LGBTQIAPN+ </Highlight>
              com profissionais de saúde qualificados, proporcionando
              experiências de cuidado seguras e inclusivas.
          </MainParagraph>

          <Buttons>
            <Button href={"/selecionar-pessoa"} btnType={"primary"}>{hero.buttonOne}</Button>
            <Button href={"/selecionar-pessoa"} btnType={"primary"}>{hero.buttonTwo}</Button>
          </Buttons>
        </HeroInfo>
      </Wrapper>
    </>
  );
}

export default Hero;
