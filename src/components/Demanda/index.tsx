import React from "react";

import { Tabs, Tab } from "react-bootstrap";

import Footer from "../Footer";
import Header from "../Header";
import Register from "../Register";
import Update from "../Update";

import { Container } from "./styles";

const Demanda: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Tabs
          defaultActiveKey="register"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="register" title="Cadastrar">
            <Register />
          </Tab>
          <Tab eventKey="update" title="Atualizar">
            <Update />
          </Tab>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Demanda;
