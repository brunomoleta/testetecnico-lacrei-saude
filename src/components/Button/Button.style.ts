'use client'
import styled from "styled-components";

export const Btn = styled.button`
    padding: 0.625rem 2rem;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
    transition: background-color 400ms ease-out;
    
    background-color: white;
    color: var(--emerald-60);
    box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 4px;
    &:hover {
        transition: background-color 200ms ease-in;
        background-color: var(--emerald-15);
    }
`
export const BtnPrimary = styled(Btn)`
    background-color: var(--emerald-70);
    color: white;
    &:hover {
        transition: background-color 200ms ease-in;
        background-color: var(--emerald-80);
    }
`
export const BtnSecondary = styled(Btn)`
    
`
export const BtnBasic = styled(Btn)`
    box-shadow: unset;    
`
