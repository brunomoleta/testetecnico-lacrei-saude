"use client";
import styled from "styled-components";
import Link from "next/link";

export const FooterStyled = styled.footer`
  border-block-start: 1px solid var(--emerald-30);

  padding-block: 64px;

  display: grid;
  grid-auto-rows: auto;

  row-gap: 48px;
`;

export const LacreiLink = styled(Link)`
  width: min-content;
  @media (min-width: 35rem) {
    width: fit-content;
  }
`;
export const Warning = styled.p`
  font-size: 0.75rem;
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
