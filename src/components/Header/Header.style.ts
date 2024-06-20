"use client";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-size: 0.875rem;

  padding-block: 32px;
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
