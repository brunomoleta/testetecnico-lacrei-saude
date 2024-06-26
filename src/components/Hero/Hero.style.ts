"use client";
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  padding-block-start: 24px;
  min-height: fit-content;

  background: linear-gradient(to right, white 0px, transparent 1200px);

  height: 700px;

  margin-block-end: 200px;

  @media (min-width: 40rem) {
    margin-block-end: 64px;
    height: 33.6875rem;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  opacity: 0.9;
  @media (min-width: 40rem) {
    opacity: 0.6;
  }
`;
export const MainImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const BaseHeading = styled.h2`
  font-size: clamp(1.75rem, 6vw - 1rem, 3rem);
  font-weight: 600;
  line-height: clamp(2.4rem, 6vw - 1rem, 3.625rem);
  margin-block: 0 3rem;
`;

export const HeroHeading = styled(BaseHeading)`
  max-inline-size: 13ch;
  color: var(--emerald-60);

  display: none;
  @media (min-width: 40rem) {
    display: inline-block;
  }
`;

export const FormHeading = styled(HeroHeading)`
  display: inline-block;

  font-size: clamp(1.125rem, 6vw - 1rem, 1.5rem);
  line-height: clamp(1em, 6vw - 1rem, 1.2em);
  margin-block: 0 8px;

  max-inline-size: unset;
`;

export const HeroHeadingMobile = styled(HeroHeading)`
  display: inline-block;

  @media (min-width: 40rem) {
    display: none;
  }
`;
export const HeroParagraph = styled.p`
  border-radius: 0 8px 8px 0;
  color: var(--grey-70);

  margin-block: 0 3rem;

  font-size: clamp(1rem, 6vw - 1rem, 1.5rem);
  line-height: clamp(1.5rem, 6vw - 1rem, 2.25rem);
  max-inline-size: 37ch;
`;
export const PageParagraph = styled(HeroParagraph)`
  background-color: white;
`;

export const HeroInfo = styled.div`
  position: relative;
  max-width: var(--container-max-width);
  margin: auto;

  width: 100%;
  padding-inline: var(--clamp);
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  flex-flow: column;
  justify-items: center;
  @media (min-width: 40rem) {
    flex-flow: revert;
    justify-items: revert;
  }
`;
export const Highlight = styled.strong`
  font-weight: 600;
`;

export const HeroCard = styled.div`
  position: absolute;
  bottom: -950px;
  right: 0;

  padding-block-start: 120px;
  width: 100%;

  padding: var(--clamp);

  @media (min-width: 40rem) {
    position: unset;
    bottom: unset;
    right: unset;
    padding: 4rem 0 0 0;
  }
`;
export const Container = styled.div`
  background-color: var(--grey-05);
  border: 2px solid var(--grey-20);

  padding: 40px clamp(0.75rem, 3svw, 1.5rem);
  border-radius: 8px;

  @media (min-width: 40rem) {
    padding: unset;
    margin-block-start: 40px;
    border-radius: revert;
    background-color: revert;
    border: revert;
  }
`;
