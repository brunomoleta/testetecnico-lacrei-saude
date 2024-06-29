"use client";
import styled from "styled-components";
import {BaseHeading} from "@/components/Hero/Hero.style";
import Image from "next/image";

const Base = styled(BaseHeading)`
  border-radius: 0 8px 8px 0;
  background-color: white;
  color: var(--grey-90);
  margin-block: 0;
  max-inline-size: 15ch;
`;
export const Heading = styled(Base)`
  display: none;

  @media (min-width: 40rem) {
    display: inline-block;
  }
`;

export const HeadingMobile = styled(Base)`
    display: none;
  @media (max-width: 40rem) {
  display: inline-block;
  }
`;

export const Container = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  width: 100%;
  max-width: var(--container-max-width);

  padding-inline: var(--clamp);

  margin: 0 auto;

  padding-block: 64px 0;
  margin-block-end: 0;
  @media (min-width: 40rem) {
    padding-block: 64px;
    margin-block-end: 64px;
  }
`;
export const Line = styled.canvas`
  height: 3px;

  background-color: var(--emerald-60);
  width: 100%;
  max-width: 200px;
  margin-block-end: 3rem;
  @media (min-width: 40rem) {
    width: 320px;
  }
`;
export const FormLine = styled(Line)`
  margin-block-end: unset;
`;

export const ImageWrapper = styled.div`
  z-index: -1;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 320px;

  aspect-ratio: 2/3;

  margin-block-end: 64px;
  border-radius: 8px;

  @media (min-width: 40rem) {
    position: absolute;
    margin-block-end: 0;
    height: 100%;
    width: auto;
    right: 0;
    top: 0;
    border-radius: 8px 0 0 8px;
  }
`;
export const PeopleImg = styled(Image)`
  position: relative;
  width: 100%;
  height: auto;
  object-position: center;
  object-fit: cover;
`;
