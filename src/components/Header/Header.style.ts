"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background: var(--header-background);
    height: 6rem;
    
    display: grid;
    
`
export const HeaderWrapper = styled.div`
  display: flex;
    width: 100%;  
  flex-wrap: wrap;
    
  font-size: 0.875rem;
    
  max-width: var(--container-max-width);
  margin: auto;
  padding-inline: var(--clamp);

  @media (min-width: 40rem) {
    font-size: unset;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: end;
    align-items: center;
  }
`;
