"use client";

import React from "react";

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Author, Wrapper } from "@/components/Hero/Hero.style";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Hero() {
  return (
    <Wrapper>
      <VisuallyHidden>
        <h1>Teste técnico da Lacrei Saúde produzido por Bruno Moleta Santos</h1>
      </VisuallyHidden>
      <p>
        <Balancer>
          Um dos nossos pilares é a representatividade LGBTQIAPN+. Você sabia
          que existem artistas da comunidade que fazem ilustrações super legais
          apenas com CSS e HTML?
        </Balancer>
      </p>
      <p>
        <Balancer>
          Uma delas é a{" "}
          <Author href="https://css-art.com/@fossheim">Sarah Fossheim</Author>
          (elu/delu). Os desenhos aqui expostos são meus preferidos delu, tomara
          que tu goste também :)
        </Balancer>
      </p>
      <p>Arraste para os lados para ver as obras :)</p>

      <div>
        <p>
          Caso você já tenha visto as artes, sugiro que você vá pra página
          seguinte que também está bem legal ;)
        </p>
        <Link href={"/pride"}>Vamos lá</Link>
      </div>
    </Wrapper>
  );
}

export default Hero;
