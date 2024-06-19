"use client";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: end;
  align-items: center;
  padding-block: 32px;
  max-width: 1440px;
  margin: auto;
  padding-inline: clamp(16px, 4svw, 40px);
`;
