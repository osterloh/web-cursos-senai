import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <form action="/demanda">
            <label htmlFor="">E-Mail:</label>
            <input type="email" name="email" placeholder="E-Mail" />
            <label htmlFor="">Senha:</label>
            <input type="password" name="senha" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
