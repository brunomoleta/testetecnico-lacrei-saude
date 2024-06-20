"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--container-max-width);
  margin: auto;
  height: 100%;

  padding-inline: var(--clamp);
  display: grid;
  grid-template-rows: auto min(1fr) auto;

  gap: 32px;
  justify-content: center;

  margin-block-end: 40px;
`;
