import React from "react";
import Button from "@/components/Button";
import { hero } from "@/data/hero";
import { Buttons } from "@/components/Hero/Hero.style";
import { pessoaLink } from "@/data/headerData";

function HeroButtons() {
  return (
    <Buttons>
      <Button href={pessoaLink} btnType={"primary"}>
        {hero.buttonOne}
      </Button>
      <Button href={pessoaLink} btnType={"primary"}>
        {hero.buttonTwo}
      </Button>
    </Buttons>
  );
}

export default HeroButtons;
