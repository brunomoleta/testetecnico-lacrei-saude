"use client";
import styled from "styled-components";

export const HideAtMobile = styled.div`
  display: none;
  @media (min-width: 37.5rem) {
    display: block;
  }
`;
