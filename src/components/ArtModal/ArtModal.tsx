"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { art } from "@/types/types";
import {
  Ampliar,
  DClose,
  DContent,
  DOverlay,
} from "@/components/ArtModal/ArtModal.style";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function ArtModal({ art }: { art: art }) {
  const { nome, subtitulo, objeto } = art;
  const id = React.useId();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Ampliar>Ampliar</Ampliar>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DOverlay />
        <DContent>
          <VisuallyHidden>
            <Dialog.Title>{nome}</Dialog.Title>
            <Dialog.Description>{subtitulo}</Dialog.Description>
          </VisuallyHidden>
          {objeto}
          <DClose asChild>
            <button id={`${id}-closemodal`} aria-label="Close">
              <Cross2Icon color={"var(--color-link)"} width={25} height={25} />
            </button>
          </DClose>
        </DContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ArtModal;
