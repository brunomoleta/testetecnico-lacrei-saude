import People from "../../assets/pexels-shkrabaanthony-5214997.jpg";
import React from "react";
import Button from "@/components/Button";
import { Buttons } from "@/components/Hero/Hero.style";
import { selecionarPessoaData } from "@/data/selecionar-pessoa";
import MainParagraph from "@/components/MainParagraph";
import {
  Container,
  Heading,
  ImageWrapper,
  Line,
  PeopleImg,
  Wrapper,
} from "@/components/SelecionarPessoa/SelecionarPessoa.style";

function SelecionarPessoa() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Heading as="h1">
            Junte-se à nossa&nbsp;comunidade
            <Line />
          </Heading>

          <MainParagraph>{selecionarPessoaData.description}</MainParagraph>
          <Buttons>
            <Button href="/selecionar-pessoa" btnType="primary">
              {selecionarPessoaData.buttonOne}
            </Button>
            <Button href="/selecionar-pessoa" btnType="secondary">
              {selecionarPessoaData.buttonTwo}
            </Button>
          </Buttons>
        </div>
      </Wrapper>
      <ImageWrapper>
        <PeopleImg
          fill={true}
          src={People}
          alt="Imagem de uma profissional da saúde orientando uma paciente"
        />
      </ImageWrapper>
    </Container>
  );
}

export default SelecionarPessoa;
