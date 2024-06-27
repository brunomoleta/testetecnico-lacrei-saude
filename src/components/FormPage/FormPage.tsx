import React from "react";

import Doc from "../../assets/login-saude.jpg";
import Person from "../../assets/login-paciente.jpg";

import {
  Container,
  PeopleImg,
  WrapperPaciente,
  WrapperProfissional,
} from "@/components/FormPage/FormPage.style";
import FormContent from "@/components/FormContent";

function FormPage({ isDoctor = true }: { isDoctor: boolean }) {
  const { image, string } = isDoctor ? persona.doctor : persona.person;

  const WrapperType = () => {
    return isDoctor ? (
      <WrapperProfissional>
        <PeopleImg src={image} alt={string} layout="fill" />
      </WrapperProfissional>
    ) : (
      <WrapperPaciente>
        <PeopleImg src={image} alt={string} layout="fill" />
      </WrapperPaciente>
    );
  };

  return (
    <Container>
      <FormContent />
      {WrapperType()}
    </Container>
  );
}

const persona = {
  doctor: {
    string: "Profissional de saúde.",
    image: Doc,
  },
  person: {
    string: "Atendimento a pessoa usuária",
    image: Person,
  },
};

export default FormPage;
