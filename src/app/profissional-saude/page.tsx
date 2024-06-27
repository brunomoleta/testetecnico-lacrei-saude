import type { Metadata } from "next";
import FormPage from "@/components/FormPage";

export const metadata: Metadata = {
  title: "Profissional da Saúde | Lacrei Saúde",
  description: "Teste técnico de Bruno",
};

const ProfissionalPage = () => {
  return (
    <>
      <FormPage isDoctor={true} />
    </>
  );
};

export default ProfissionalPage;
