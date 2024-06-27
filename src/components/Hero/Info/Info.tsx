import React from "react";
import {
  Container,
  HeroCard,
  HeroInfo,
  Highlight,
} from "@/components/Hero/Hero.style";
import HeadingOne from "@/components/Hero/HeadingOne";
import MainParagraph from "@/components/MainParagraph";
import HeroButtons from "@/components/HeroButtons";

function Info() {
  return (
    <HeroInfo>
      <HeroCard>
        <HeadingOne page="landing" />
        <Container>
          <MainParagraph>
            Conectamos pessoas <Highlight>LGBTQIAPN+ </Highlight>
            com profissionais de saúde qualificados, proporcionando experiências
            de cuidado seguras e inclusivas.
          </MainParagraph>

          <HeroButtons />
        </Container>
      </HeroCard>
    </HeroInfo>
  );
}

export default Info;
