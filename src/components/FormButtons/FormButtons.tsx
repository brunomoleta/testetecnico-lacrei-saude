import React from "react";
import {
  Buttons,
  ForgotPassword,
} from "@/components/FormElement/FormElement.style";
import {
  RealBtnPrimary,
  RealBtnSecondary,
} from "@/components/Button/Button.style";

function FormButtons() {
  return (
    <Buttons>
      <RealBtnPrimary type="submit">Enviar</RealBtnPrimary>
      <RealBtnSecondary type="reset">Criar conta</RealBtnSecondary>

      <ForgotPassword type="reset">Esqueci a senha</ForgotPassword>
    </Buttons>
  );
}

export default FormButtons;
