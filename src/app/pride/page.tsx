import type { Metadata } from "next";
import { Author } from "@/components/Hero/Hero.style";
import SwitchFlag from "@/components/SwitchFlag";
import { SwitchPage } from "@/components/ArtModal/ArtModal.style";
import { Wrapper } from "@/app/pride/Pride.style";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Pride | Lacrei Saúde",
  description: "Teste técnico de Bruno",
};
const Pride = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Para celebrar o mês do Orgulho LGBTQIAPN+ o desenvolvedor canadense{" "}
          <Author href={"https://www.joshwcomeau.com/animation/pride-flags/"}>
            Josh Comeau
          </Author>{" "}
          produziu a bandeira do orgulho interativa em css e js.
        </p>
        <p>Clique nela para interagir entre quatro opções.</p>
      </div>
      <SwitchFlag />
      <p>
        Obrigado pelo seu tempo e espero que tenha gostado da experiência. :D
      </p>
      <SwitchPage href={"/"}>
        <ArrowLeftIcon /> Retornar para página principal
      </SwitchPage>
    </Wrapper>
  );
};

export default Pride;
