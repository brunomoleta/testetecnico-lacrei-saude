"use client";

import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.section`
  cursor: grab;
  overflow-x: hidden;
  padding-inline: 40px;
  margin-block-start: 40px;
`;
export const TextWrap = styled.div``;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline-end: 48px;

  margin-block-start: 40px;
`;

export const ArtContainer = styled(Slider)`
  & > * > * {
    transform: scale(0.2);
  }
`;
