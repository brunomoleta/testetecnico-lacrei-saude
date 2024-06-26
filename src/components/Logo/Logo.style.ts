"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const LogoStyle = styled(Image)`
    height: auto;
`;



export const LogoLink = styled(Link)`
  margin-inline-end: auto;
  padding-inline-start: unset;
  padding: 20px 20px 20px 0;  
`;
export const LogoMobile = styled(LogoLink)`
    @media (min-width: 37.5rem){
        display: none;
    }
`
export const LogoDesktop = styled(LogoLink)`
        display: none;
    @media (min-width: 37.5rem){
        display: block;
    }
`