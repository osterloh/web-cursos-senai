import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div className="conteudo">
          Quer receber nosso conteúdo exclusivo?{" "}
          <a href="https://fiesc.com.br/inscricoes">Inscreva-se!</a>
        </div>
      </Container>
    </>
  );
};

export default Footer;
