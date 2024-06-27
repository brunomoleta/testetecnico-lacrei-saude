"use client";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding-block: 80px 128px;
  position: relative;

  display: flex;
  flex-flow: column;
  gap: 40px;

  width: 100%;
  max-width: var(--container-max-width);
  margin: auto;
  padding-inline: var(--clamp);

  @media (min-width: 35rem) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 80px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;

  margin-block-end: 64px;
  border-radius: 8px;

  @media (min-width: 40rem) {
    margin-block-end: 0;
    height: 100%;
  }
`;
export const PeopleImg = styled(Image)`
  position: relative;
  width: 100%;
  height: auto;
  object-position: center;
  object-fit: contain;
`;

export const WrapperPaciente = styled(ImageWrapper)`
  aspect-ratio: 2940/2110;
`;
export const WrapperProfissional = styled(ImageWrapper)`
  aspect-ratio: 2250/1928;
  opacity: 0.8;
`;

export const Paragraph = styled.p`
  color: var(--grey-70);
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 1.5rem;

  max-inline-size: 55ch;
`;
