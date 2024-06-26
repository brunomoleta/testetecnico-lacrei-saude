"use client";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding-block: 64px;

  display: grid;
  grid-auto-rows: auto;

  row-gap: 48px;

  @media (min-width: 37.5rem) {
    border-block-start: 1px solid var(--emerald-30);
  }
`;

export const Warning = styled.p`
  font-size: 0.75rem;

  @media (max-width: 37.5rem) {
    max-inline-size: 30ch;
  }
`;

export const FooterWrapper = styled.section`
  padding-inline: var(--clamp);

  width: 100%;
  max-width: var(--container-max-width);
  margin: auto;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: var(--emerald-30);
`;
