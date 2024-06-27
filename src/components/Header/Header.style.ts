"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--header-background);
  padding-block: 2rem;

  display: grid;
`;
export const HeaderWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 16px;

  font-size: 0.875rem;

  max-width: var(--container-max-width);
  margin: auto;
  padding-inline: var(--clamp);

  @media (min-width: 40rem) {
    font-size: unset;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: end;
    align-items: center;
  }
`;
