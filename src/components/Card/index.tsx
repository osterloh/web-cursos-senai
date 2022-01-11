import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface ICursoProps {
  curso: string;
  totalDeVagas: number;
  vagasDisponiveis: number;
  vagasDisponiveisAte: Date;
}

const Card: React.FC<ICursoProps> = ({
  curso,
  totalDeVagas,
  vagasDisponiveis,
  vagasDisponiveisAte,
}) => {
  const dataLimite = new Date(vagasDisponiveisAte);
  return (
    <>
      <Container>
        <img
          src="https://cursos.sesisenai.org.br/images/banners/areas/ti-software/1366x255.png"
          alt=""
        />
        <h3>Aprendizagem Industrial</h3>
        <h4 id="curso">{curso}</h4>
        <div>
          <h4 className="clarear">Total:</h4>
          <h3 className="clarear">{totalDeVagas} vagas</h3>
        </div>
        <div>
          <h4>Disponível:</h4>
          <h1>{vagasDisponiveis} vagas</h1>
        </div>
        <p>
          Reservas disponíveis até dia{" "}
          {`${dataLimite.getDate()}/${
            dataLimite.getMonth() + 1
          }/${dataLimite.getFullYear()}`}
        </p>
        <Link to="/appointment">Reservar</Link>
      </Container>
    </>
  );
};

export default Card;
