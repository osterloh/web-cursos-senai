import React from "react";

import Footer from "../Footer";
import Header from "../Header";

import { Container } from "./styles";

const Appointment: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Reservar vaga no curso de Programador de Sistemas de Informação</h2>
        <div>
          <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" name="nome" placeholder="Nome" />
            <label htmlFor="">E-Mail:</label>
            <input type="email" name="email" placeholder="E-Mail" />
            <label htmlFor="">Empresa:</label>
            <input type="text" name="empresa" placeholder="Empresa" />
            <label htmlFor="">Telefone:</label>
            <input type="number" name="telefone" placeholder="Telefone" />
            <label htmlFor="">Total de vagas desejada:</label>
            <input type="number" name="vagas" placeholder="Vagas necessária" />
            <button type="submit">Enviar solicitação</button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Appointment;
