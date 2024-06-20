"use client";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const DOverlay = styled(Dialog.Overlay)`
  background-color: hsla(100deg, 0%, 80%, 0.7);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const DContent = styled(Dialog.Content)`
  background-color: var(--color-background);
  border-radius: 6px;
  display: flex;
  flex-flow: column-reverse;
  box-shadow:
    hsl(206 22% 7% / 35%) 0 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  max-width: 90svw;
  max-height: 100vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
export const DClose = styled(Dialog.Close)`
  display: grid;
  place-content: center;

  position: absolute;
  top: 0;
  right: -40px;
`;

export const Ampliar = styled.button`
  display: none;

  @media (min-width: 45rem) {
    display: unset;

    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 10px 0;

    color: var(--color-link);
    border: 2px solid var(--color-link);
    font-weight: 600;
    letter-spacing: 0.02rem;

    height: fit-content;

    padding: 8px 24px;

    border-radius: 8px;
    transition: background-color 450ms ease-out;

    &:hover {
      background-color: var(--emerald-10);
      transition: background-color 250ms ease-in;
    }
  }
`;
