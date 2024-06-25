"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  padding: 40px;
  padding-block-start: 24px;
    height: 33.6875rem;

  background: linear-gradient(to right, white 0px, transparent 1200px);

  @media (min-width: 62.5rem) {
    
  }
`;
export const Author = styled(Link)`
  color: var(--color-link);
  text-decoration: underline;
  padding-inline: 0;
  &:hover {
    text-decoration: unset;
  }
`;
export const ImageWrapper = styled.div`
    position:absolute;
    inset: 0;
    right: 0;
    opacity: .5;
    z-index: -1;
    //filter: grayscale(100%);
    height: 100%;
`
export const MainImage = styled(Image)`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

export const HeroHeading = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.625rem;
    color: var(--emerald-60);
    margin-block: 0 3rem;
    max-inline-size: 13ch;
    
`
export const HeroParagraph = styled.p`
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: var(--grey-70);
    
    max-inline-size: 37ch;
    margin-block: 0 3rem;    
`

export const HeroInfo = styled.div`
    padding-block-start: 120px;
    max-width: var(--container-max-width);
    margin: auto;
    padding-inline: var(--clamp);
    
    font-size: 2.25rem;
`

export const Buttons = styled.div`
    display: flex;
    gap: 1.5rem;
`