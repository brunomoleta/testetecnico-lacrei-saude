"use client";
import styled from "styled-components";

export const Buttons = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 24px;
`;

export const ForgotPassword = styled.button`
  text-decoration: underline;
  background-color: inherit;
  text-align: initial;
  color: var(--emerald-70);
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  row-gap: 2rem;
`;
