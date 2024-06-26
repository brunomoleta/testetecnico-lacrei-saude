import type { Metadata } from "next";
import SelecionarPessoa from "@/components/SelecionarPessoa";

export const metadata: Metadata = {
  title: "Entrar | Lacrei Saúde",
  description: "Teste técnico de Bruno",
};
const SelecionarPessoaPage = () => {
  return <>
    <SelecionarPessoa/>
  </>;
};

export default SelecionarPessoaPage;
