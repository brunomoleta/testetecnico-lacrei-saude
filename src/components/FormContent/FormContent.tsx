import React from "react";
import HeadingOne from "@/components/Hero/HeadingOne";
import { InfoContainer, Paragraph } from "@/components/FormPage/FormPage.style";
import FormElement from "@/components/FormElement";

function FormContent() {
  return (
    <InfoContainer>
      <HeadingOne page="form" />
      <Paragraph>Entre ou crie sua conta Lacrei Saúde.</Paragraph>
      <FormElement />
    </InfoContainer>
  );
}

export default FormContent;
