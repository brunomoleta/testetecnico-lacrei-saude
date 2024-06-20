"use client";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  @media (min-width: 62.5rem) {
    display: none;
  }
  margin-block-end: 32px;
`;

export const NextPageBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 10px 0;

  background-color: var(--emerald-60);
  color: var(--grey-10);
  border: 2px solid var(--color-link);
  font-weight: 600;
  letter-spacing: 0.02rem;

  height: fit-content;

  padding: 8px 24px;

  border-radius: 8px;
  transition: background-color 450ms ease-out;
  

  &:hover {
    color: 2px solid var(--color-link);
    background-color: var(--emerald-10);
    transition: background-color 250ms ease-in;
  }
`;
export const NextPageMobile = styled(NextPageBtn)`
  padding-block: 16px;
  text-align: center;
  @media (min-width: 62.5rem) {
    display: none;
  }
`;
export const NextPageDesktop = styled(NextPageBtn)`
  display: none;
  @media (min-width: 62.5rem) {
    display: flex;
  }
`;
