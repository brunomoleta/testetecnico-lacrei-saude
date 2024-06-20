"use client";
import styled from "styled-components";

export const Container = styled.div`
  transform-origin: left center;
  transform: scale(0.4) translateY(200px);
  width: fit-content;

  @media (min-width: 450px) {
    transform: scale(0.5);
  }
  @media (min-width: 550px) {
    transform: scale(0.6);
  }
  @media (min-width: 650px) {
    transform: scale(0.7);
  }
  @media (min-width: 750px) {
    transform: scale(0.8);
  }
  @media (min-width: 800px) {
    transform: scale(0.85);
  }
  @media (min-width: 850px) {
    transform: scale(0.9);
  }
  @media (min-width: 900px) {
    transform: scale(0.95);
  }
`;
