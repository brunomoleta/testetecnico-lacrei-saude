import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

function Hero() {
  return (
    <div>
        <Balancer>
      <p>
          Um dos pilares da Lacrei Saúde é a representatividade. Você sabia que
          existem artistas que fazem arte belíssima apenas com CSS e HTML?
      </p>
          <p>

          Uma
          delas é a <Link href="https://css-art.com/@fossheim">Sarah Fossheim</Link>(elu/delu). Estas são as obras delu que mais
          gosto, tomara que te agrade também :)
          </p>
        </Balancer>
    </div>
  );
}

export default Hero;
