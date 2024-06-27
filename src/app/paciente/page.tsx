import type { Metadata } from "next";
import FormPage from "@/components/FormPage";

export const metadata: Metadata = {
  title: "Paciente | Lacrei Saúde",
  description: "Teste técnico de Bruno",
};

const PacientPage = () => {
  return (
    <>
      <FormPage isDoctor={false} />
    </>
  );
};

export default PacientPage;
