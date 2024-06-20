import React from "react";
import Logo from "@/components/Logo";
import { Container, LacreiLink } from "@/components/Footer/Footer.style";

function Footer() {
  return (
    <footer>
      <Container>
        <Logo />
        <LacreiLink href="https://lacreisaude.com.br/quem-somos/">
          Quem somos
        </LacreiLink>
      </Container>
    </footer>
  );
}

export default Footer;
