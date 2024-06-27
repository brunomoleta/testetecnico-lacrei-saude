import React from "react";
import { Wrapper } from "@/components/SelecionarPessoa/SelecionarPessoa.style";

import PageDescription from "@/components/SelecionarPessoa/PageDescription";
import PageButtons from "@/components/PageButtons";
import PageImage from "@/components/SelecionarPessoa/PageImage";

function PageInfo() {
  return (
    <Wrapper>
      <div>
        <PageDescription />
        <PageImage />

        <PageButtons />
      </div>
    </Wrapper>
  );
}

export default PageInfo;
