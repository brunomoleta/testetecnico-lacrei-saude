import React from "react";
import { HeroHeading, HeroHeadingMobile } from "@/components/Hero/Hero.style";
import { hero } from "@/data/hero";
import {
  Heading,
  HeadingMobile,
  Line,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";

function HeadingOne({ isLandingPage }: { isLandingPage: boolean }) {
  if (isLandingPage) {
    return (
      <>
        <HeroHeading>Olá, você está na&nbsp;Lacrei&nbsp;Saúde!</HeroHeading>
        <HeroHeadingMobile>{hero.heading}</HeroHeadingMobile>
      </>
    );
  }
  return (
    <>
      <Heading>Junte-se à nossa&nbsp;comunidade</Heading>
      <HeadingMobile>Junte-se à nossa comunidade</HeadingMobile>
      <Line />
    </>
  );
}

export default HeadingOne;
