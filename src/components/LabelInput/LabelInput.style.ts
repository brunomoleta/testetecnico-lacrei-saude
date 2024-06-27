"use client";
import styled from "styled-components";

export const Field = styled.fieldset`
  height: fit-content;
  display: flex;
  flex-flow: column;

  border: 1px solid transparent;
  margin-block-end: 24px;
  flex-flow: column;
  gap: 8px;

  padding: 0;
  margin: 0;
`;

export const DefaultLabel = styled.label`
  width: 100%;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--grey-70);
  border-radius: 8px;
   
  padding-inline: 1ch;  
  padding-block: .20ex;  
  &:focus {
    
    
    border: 1px solid var(--emerald-40);
    outline: 1px solid transparent;
  }
}
`;
