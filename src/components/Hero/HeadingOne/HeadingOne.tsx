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
  Line,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";
import Balancer from "react-wrap-balancer";

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
        <Heading>
          <Balancer>Junte-se à nossa comunidade</Balancer>
        </Heading>

        <Line />
      </>
    );
  return (
    <div>
      <FormHeading as="h1">
        <Balancer>Boas-vindas à Lacrei Saúde</Balancer>
      </FormHeading>
      <FormLine />
    </div>
  );
}

export default HeadingOne;
