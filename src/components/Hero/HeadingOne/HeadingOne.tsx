import React from "react";
import {
  FormHeading,
  HeroHeading,
  HeroHeadingMobile,
} from "@/components/Hero/Hero.style";
import { hero } from "@/data/hero";
import {
  FormLine,
  Heading,
  HeadingMobile,
  Line,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";

type Page = "landing" | "select-person" | "form";
function HeadingOne({ page }: { page: Page }) {
  if (page === "landing") {
    return (
      <>
        <HeroHeading>Olá, você está na&nbsp;Lacrei&nbsp;Saúde!</HeroHeading>
        <HeroHeadingMobile>{hero.heading}</HeroHeadingMobile>
      </>
    );
  } else if (page === "select-person")
    return (
      <>
        <Heading>Junte-se à nossa&nbsp;comunidade</Heading>
        <HeadingMobile>Junte-se à nossa comunidade</HeadingMobile>
        <Line />
      </>
    );
  return (
    <div>
      <FormHeading as="h1">Boas-vindas à Lacrei Saúde</FormHeading>
      <FormLine />
    </div>
  );
}

export default HeadingOne;
