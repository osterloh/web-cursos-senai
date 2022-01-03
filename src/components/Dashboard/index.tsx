import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>hello</h1>
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
