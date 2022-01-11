import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";

import { Container } from "./styles";

interface ICurso {
  id: number;
  curso: string;
  totalDeVagas: number;
  vagasDisponiveis: number;
  vagasDisponiveisAte: Date;
}

const Dashboard: React.FC = () => {
  const [cursos, setCurso] = useState<ICurso[]>([]);

  useEffect(() => {
    api.get("/curso").then((response) => {
      setCurso(response.data);
    });
  }, []);

  console.log(cursos);

  return (
    <>
      <Header />
      <Container>
        <div id="cabecalho">
          <h2>
            Cursos de Aprendizagem Industrial e Quantidade de Vagas Disponíveis
            para a Indústria
          </h2>
          <Link to={"/login"}>Manutenção de Demandas</Link>
        </div>
        <div id="main">
          {cursos.map((curso) => (
            <Card
              key={curso.id}
              curso={curso.curso}
              totalDeVagas={curso.totalDeVagas}
              vagasDisponiveis={curso.vagasDisponiveis}
              vagasDisponiveisAte={curso.vagasDisponiveisAte}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
