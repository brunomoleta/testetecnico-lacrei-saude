import HeroImage from "../../assets/hero.jpg"
import React from "react";

import Balancer from "react-wrap-balancer";
import {
  Buttons,
  HeroHeading,
  HeroInfo,
  HeroParagraph,
  ImageWrapper,
  MainImage,
  Wrapper
} from "@/components/Hero/Hero.style";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import Button from "@/components/Button";

function Hero() {
  const id = React.useId();
  return (
    <>
      <Wrapper id={`${id}-hero}`}>
        <ImageWrapper>
          <MainImage src={HeroImage} layout="fill"  alt={""}/>
        </ImageWrapper>
        <VisuallyHidden>
          <h1>
            Teste técnico da Lacrei Saúde produzido por Bruno Moleta Santos. Junho de 2024.
          </h1>
        </VisuallyHidden>
        <HeroInfo>

        <HeroHeading>Olá, você está na&nbsp;Lacrei&nbsp;Saúde!</HeroHeading>
        <HeroParagraph>
          <Balancer>
            Conectamos pessoas LGBTQIAPN+
            com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
          </Balancer>
        </HeroParagraph>
        <Buttons>
          <Button btnType={"primary"}>para pacientes</Button>
          <Button btnType={"primary"}>para profissionais</Button>
        </Buttons>
        </HeroInfo>
      </Wrapper>

    </>
  );
}

export default Hero;
