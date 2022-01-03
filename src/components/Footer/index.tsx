import React from "react";

import logoSenai from "../../assets/logo.svg";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div id="linksInternos">
          <div id="sobre">
            <p>SOBRE O SENAI</p>
            <a href="#">Sobre o SENAI</a>
            <a href="#">Diretoria</a>
            <a href="#">Nossas Unidades</a>
            <a href="#">Lei de Diretrizes Orçamentarias</a>
            <a href="#">Politica de Privacidade</a>
            <a href="#">Entidades</a>
            <a href="#">Imprensa</a>
          </div>
          <div id="areas">
            <p>ÁREAS DE ATUAÇÃO</p>
            <a href="#">Educação</a>
            <a href="#">Tecnologia e Inovação</a>
            <a href="#">Faculdade SENAI</a>
            <a href="#">Blog SESI SENAI</a>
          </div>
          <div id="paginas">
            <p>OUTRAS PÁGINAS</p>
            <a href="#">Descontos, Bolsas e Financiamento</a>
            <a href="#">Trabalhe Conosco</a>
            <a href="#">Portal do Fornecedor</a>
            <a href="#">Intranet</a>
            <a href="#">Compliance</a>
            <a href="#">Transparência</a>
            <a href="#">Prestação de Contas TCU</a>
          </div>
          <div id="federacao">
            <p>FEDERAÇÃO DAS INDÚSTRIAS DO ESTADO DE SANTA CATARINA</p>
            <div>
              <img src="" alt="" />
              <div>
                <p>Rod. Admar Gonzaga, 2765</p>
                <p>Florianópolis/SC - 88034-001</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <p>faleconosco@fiesc.com.br</p>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <p>(48) 3231 4100</p>
                <p>0800 048 1212</p>
              </div>
            </div>
          </div>
        </div>
        <div id="midiasSociais">
          <img src={logoSenai} alt="SENAI" />
          <div>
            <a href="#">facebook</a>
            <a href="#">twiter</a>
            <a href="#">instagram</a>
            <a href="#">linkedin</a>
            <a href="#">youtube</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
