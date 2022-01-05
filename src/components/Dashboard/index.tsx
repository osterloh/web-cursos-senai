import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>
          Cursos de Aprendizagem Industrial e Quantidade de Vagas Disponíveis
          para a Indústria
        </h2>
        <div id="main">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
