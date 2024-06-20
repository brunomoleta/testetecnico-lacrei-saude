"use client";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: var(--container-max-width);
  margin: auto;

  padding-block-end: 48px;

  padding-inline: var(--clamp);
`;

export const LacreiLink = styled(Link)`
  width: min-content;
  @media (min-width: 35rem) {
    width: fit-content;
  }
`;
