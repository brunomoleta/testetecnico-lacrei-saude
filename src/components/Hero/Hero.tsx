import HeroImage from "../../assets/hero.jpg";
import React from "react";

import {
  Buttons,
  Container,
  HeroCard,
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
import HeadingOne from "@/components/Hero/HeadingOne";

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
          <HeroCard>
            <HeadingOne />
            <Container>
              <MainParagraph>
                Conectamos pessoas <Highlight>LGBTQIAPN+ </Highlight>
                com profissionais de saúde qualificados, proporcionando
                experiências de cuidado seguras e inclusivas.
              </MainParagraph>

              <Buttons>
                <Button href={"/selecionar-pessoa"} btnType={"primary"}>
                  {hero.buttonOne}
                </Button>
                <Button href={"/selecionar-pessoa"} btnType={"primary"}>
                  {hero.buttonTwo}
                </Button>
              </Buttons>
            </Container>
          </HeroCard>
        </HeroInfo>
      </Wrapper>
    </>
  );
}

export default Hero;
