import React from "react";
import Logo from "@/components/Logo";
import IconsList from "@/components/Footer/IconsList";
import {
  Container,
  Wrapper,
} from "@/components/Footer/TopFooter/TopFooter.style";
import CategoryFooter from "@/components/Footer/CategoryFooter";

function TopFooter() {
  return (
    <Container>
      <Wrapper>
        <Logo isHeader={false} />
        <IconsList />
      </Wrapper>
      <CategoryFooter />
    </Container>
  );
}

export default TopFooter;
