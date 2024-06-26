'use client'
import styled from "styled-components";
import {HeroHeading} from "@/components/Hero/Hero.style";
import Image from "next/image";

export const Heading = styled(HeroHeading)`
    color: var(--grey-90);
    max-inline-size: 15ch
`

export const Container = styled.div`
    position: relative;
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    
    width: 100%;
    max-width: var(--container-max-width);
    
    padding-inline: var(--clamp);
    
    margin: 0 auto ;
    padding-block: 64px;
    
    margin-block-end: 64px;
`
export const Line = styled.canvas`
    height: 3px;
    width: 320px;
    
    background-color: var(--emerald-60);
`
export const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    aspect-ratio: 2/3;
    overflow: hidden;
    width: auto;
`
export const PeopleImg = styled(Image)`
    border-radius: 8px 0 0 8px;
    width: 100%;
    height: auto;
    object-position: center;
    object-fit: cover;
`
