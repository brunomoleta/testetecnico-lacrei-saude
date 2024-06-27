import React from "react";
import Button from "@/components/Button";
import { hero } from "@/data/hero";
import { Buttons } from "@/components/Hero/Hero.style";
import { paciente, profissional } from "@/data/headerData";

function HeroButtons() {
  return (
    <Buttons>
      <Button href={paciente} btnType={"primary"}>
        {hero.buttonOne}
      </Button>
      <Button href={profissional} btnType={"primary"}>
        {hero.buttonTwo}
      </Button>
    </Buttons>
  );
}

export default HeroButtons;
