"use client";
import styled from "styled-components";
import Link from "next/link";

export const List = styled.ul`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  transform: translateX(-16px);
`;

export const IconImg = styled(Link)`
  width: 54px;
  height: 54px;
  display: grid;
  place-content: center;
`;
