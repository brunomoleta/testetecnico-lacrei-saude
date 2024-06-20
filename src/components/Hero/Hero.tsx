"use client";

import React from "react";

import Balancer from "react-wrap-balancer";
import { Author, Instruction, Wrapper } from "@/components/Hero/Hero.style";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NextPageDesktop } from "@/components/ArtWrapperDefault/Default.style";
import { Info } from "@/components/ArtGrid/ArtGrid.style";
import {ArrowRightIcon} from "@radix-ui/react-icons";

function Hero() {
  const id = React.useId();
  return (
    <>
      <Wrapper id={`${id}-hero}`}>
        <VisuallyHidden>
          <h1>
            Teste técnico da Lacrei Saúde produzido por Bruno Moleta Santos
          </h1>
        </VisuallyHidden>
        <p>
          <Balancer>
            Um dos pilares aqui na Lacrei Saúde é a representatividade
            LGBTQIAPN+. Você sabia que existem artistas da comunidade que fazem
            ilustrações super legais apenas com CSS e HTML?
          </Balancer>
        </p>
        <p>
          <Balancer>
            Uma delas é a{" "}
            <Author href="https://css-art.com/@fossheim">Sarah Fossheim</Author>
            (elu/delu). Os desenhos a seguir são meus preferidos delu, tomara
            que tu goste também.
          </Balancer>
        </p>
        <Instruction>Arraste para os lados para ver as obras :)</Instruction>
      </Wrapper>
      <Info style={{ paddingInlineEnd: "24px", paddingBlockStart: "10px" }}>
        <div />
        <NextPageDesktop href="/pride">Ir para página seguinte <ArrowRightIcon/></NextPageDesktop>
      </Info>
    </>
  );
}

export default Hero;
