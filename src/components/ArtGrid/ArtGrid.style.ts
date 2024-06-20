"use client";

import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.section`
  cursor: grab;
  overflow-x: hidden;
  margin-block-start: 40px;

  padding-inline: clamp(1px, 5vw, 40px);
`;
export const TextWrap = styled.div``;
export const Info = styled.div`
  display: flex;
  flex-flow: column;

  @media (min-width: 62.5rem) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    margin-block-start: 40px;
  }
`;

export const ArtWrapper = styled(Slider)`
  display: none;
  @media (min-width: 62.5rem) {
    display: unset;
    overflow-x: hidden;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;

  @media (min-width: 62.5rem) {
    font-size: 1.25rem;
  }
`;
export const Subtitle = styled.p`
  color: var(--color-text-secondary);

  font-size: 2rem;

  @media (min-width: 62.5rem) {
    font-size: unset;
  }
`;
export const Line = styled.hr`
  background-color: var(--color-link);
  height: 1px;
  width: 100svw;
  margin: auto;
  margin-block-end: 40px;
`;
