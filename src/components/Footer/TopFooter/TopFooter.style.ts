"use client";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column-reverse;
  row-gap: 3rem;

  border-block-start: 1px solid var(--emerald-30);
  padding-block-start: 48px;

  @media (min-width: 40rem) {
    border-block-start: revert;
    margin-block-start: revert;

    display: grid;
    grid-template-columns: auto 1fr;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 64px;
`;
