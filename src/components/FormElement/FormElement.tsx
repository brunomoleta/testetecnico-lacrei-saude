'use client'
import React, {ChangeEvent} from "react";
import LabelInput from "@/components/LabelInput";
import {
  Container,
  StyledForm,
} from "@/components/FormElement/FormElement.style";
import FormButtons from "@/components/FormButtons";

function FormElement() {
  const id = React.useId();
  const email = "e-mail";
  const password = "senha";
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if(name === email) {
      setEmailValue(value);
    } else if(name === password) {
      setPasswordValue(value);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailValue("");
    setPasswordValue("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <LabelInput name={email} value={emailValue} onChange={handleChange} label={email} id={`${id}-${email}`} />
        <LabelInput name={password} value={passwordValue} onChange={handleChange} label={password} id={`${id}-${password}`} />
      </Container>
      <FormButtons/>
    </StyledForm>
  );
}

export default FormElement;
