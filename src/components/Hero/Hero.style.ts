"use client";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  padding: 40px;
  max-width: 700px;
  overflow-wrap: unset;
`;
export const Author = styled(Link)`
  color: var(--color-link);
  text-decoration: underline;
  padding-inline: 0;
  &:hover {
    text-decoration: unset;
  }
`;
