import React, { ForwardedRef } from "react";
import {
  DefaultLabel,
  Field,
  StyledInput,
} from "@/components/LabelInput/LabelInput.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  id: string;
}

const LabelInput = React.forwardRef<HTMLInputElement, IInput>(
  (
    { id, type = "text", label, ...delegated },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Field>
        <DefaultLabel htmlFor={id}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </DefaultLabel>
        <StyledInput name={id} type={type} id={id} ref={ref} {...delegated} />
      </Field>
    );
  },
);

LabelInput.displayName = "LabelInput";

export default LabelInput;
