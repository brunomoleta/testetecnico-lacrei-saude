"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  justify-items: end;

  column-gap: 2.5rem;
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  height: fit-content;
`;

export const Categories = styled.div`
  display: flex;
  flex-flow: column;
  gap: 40px;
`;
export const Category = styled.ul`
  display: flex;
  flex-flow: column;

  row-gap: 1rem;
`;
export const Item = styled.li`
  font-size: clamp(0.875rem, 6vw - 1rem, 2.8rem);
  line-height: clamp(1.3rem, 6vw - 1rem, 1.5rem);
  height: fit-content;
`;
