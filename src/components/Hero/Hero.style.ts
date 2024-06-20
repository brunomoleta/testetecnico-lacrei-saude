"use client";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  padding: 40px;
  padding-block-start: 24px;

  overflow-wrap: unset;

  display: grid;
  gap: 24px;
  grid-template-rows: auto auto auto 1fr;

  background-color: var(--hero-background);

  @media (min-width: 62.5rem) {
    width: 700px;
    height: 712.5px;
    margin-inline-end: 24px;
    margin-block-start: 20px;
  }
`;
export const Author = styled(Link)`
  color: var(--color-link);
  text-decoration: underline;
  padding-inline: 0;
  &:hover {
    text-decoration: unset;
  }
`;
export const Instruction = styled.p`
  display: none;
  @media (min-width: 62.5rem) {
    display: unset;
  }
`;
