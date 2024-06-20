"use client";
import React from "react";
import PrideFlag from "@/data/PrideFlag";
import {
  Button,
  Title,
  Wrapper,
} from "@/components/SwitchFlag/SwitchFlag.style";

function SwitchFlag() {
  const choose = ["rainbow", "rainbow-original", "trans", "pan"];
  const text = ["arco-íris", "arco-íris clássico", "trans", "pan"];
  const [index, setIndex] = React.useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1 === choose.length ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <PrideFlag variant={choose[index]} />
      </Button>
      <Title style={{ color: "var(--color-link)" }}>{text[index]}</Title>
    </Wrapper>
  );
}

export default SwitchFlag;
