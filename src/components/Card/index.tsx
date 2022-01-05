import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Card: React.FC = () => {
  return (
    <>
      <Container>
        <img
          src="https://cursos.sesisenai.org.br/images/banners/areas/ti-software/1366x255.png"
          alt=""
        />
        <h3>Aprendizagem Industrial</h3>
        <h4 id="curso">Programador de Sistemas de Informação</h4>
        <div>
          <h4 className="clarear">Total:</h4>
          <h3 className="clarear">35 vagas</h3>
        </div>
        <div>
          <h4>Disponível:</h4>
          <h1>12 vagas</h1>
        </div>
        <p>Reservas disponíveis até dia 10/03/2021</p>
        <Link to="/appointment">Reservar</Link>
      </Container>
    </>
  );
};

export default Card;
