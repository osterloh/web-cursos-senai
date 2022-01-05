import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import logoSenai from "../../assets/logo2.svg";
import emailSenai from "../../assets/email.png";
import phoneSenai from "../../assets/phone.png";
import mapSenai from "../../assets/map.png";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div id="linksInternos">
          <div id="sobre">
            <p>SOBRE O SENAI</p>
            <div>
              <a href="https://sc.senai.br/sobre-senai">Sobre o SENAI</a>
              <a href="https://sc.senai.br/diretoria">Diretoria</a>
              <a href="https://sc.senai.br/unidades-senai">Nossas Unidades</a>
              <a href="https://transparencia.sc.senai.br/lei-de-diretrizes-orcamentarias">
                Lei de Diretrizes Orçamentarias
              </a>
              <a href="https://sc.senai.br/politica-de-privacidade">
                Politica de Privacidade
              </a>
              <a href="https://sc.senai.br/entidades">Entidades</a>
              <a href="https://sc.senai.br/imprensa">Imprensa</a>
            </div>
          </div>
          <div id="areas">
            <p>ÁREAS DE ATUAÇÃO</p>
            <div>
              <a href="https://sc.senai.br/educacao">Educação</a>
              <a href="https://sc.senai.br/tecnologia-e-inovacao">
                Tecnologia e Inovação
              </a>
              <a href="https://sc.senai.br/faculdade-senai">Faculdade SENAI</a>
              <a href="https://blog.sesisenai.org.br/">Blog SESI SENAI</a>
            </div>
          </div>
          <div id="paginas">
            <p>OUTRAS PÁGINAS</p>
            <div>
              <a href="https://sc.senai.br/descontos">
                Descontos, Bolsas e Financiamento
              </a>
              <a href="https://www.crescemosjuntos.com.br/trabalhe-conosco">
                Trabalhe Conosco
              </a>
              <a href="https://portaldecompras.fiesc.com.br/Default.aspx">
                Portal do Fornecedor
              </a>
              <a href="https://intranet.sesisc.org.br/intranet">Intranet</a>
              <a href="https://sc.senai.br/compliance">Compliance</a>
              <a href="https://transparencia.sc.senai.br/">Transparência</a>
              <a href="https://transparencia.sc.senai.br/prestacao-de-contas-tcu">
                Prestação de Contas TCU
              </a>
            </div>
          </div>
          <div id="federacao">
            <p>FEDERAÇÃO DAS INDÚSTRIAS DO ESTADO DE SANTA CATARINA</p>
            <div>
              <div>
                <img src={mapSenai} alt="Map" />
                <div>
                  <p>Rod. Admar Gonzaga, 2765</p>
                  <p>Florianópolis/SC - 88034-001</p>
                </div>
              </div>
              <div>
                <img src={emailSenai} alt="E-Mail" />
                <div>
                  <p>faleconosco@fiesc.com.br</p>
                </div>
              </div>
              <div>
                <img src={phoneSenai} alt="Phone" />
                <div>
                  <p>(48) 3231 4100</p>
                  <p>0800 048 1212</p>
                </div>
              </div>
              <div>
                <div id="faleConosco">
                  <a href="https://transparencia.sc.senai.br/fale-conosco?entidade=senai">
                    FALE CONOSCO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="midiasSociais">
          <a href="https://sc.senai.br/">
            <img src={logoSenai} alt="SENAI" />
          </a>
          <div>
            {library.add(
              faFacebookF,
              faTwitter,
              faInstagram,
              faLinkedinIn,
              faYoutube
            )}
            <a href="https://www.facebook.com/senaisc">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>

            <a href="https://twitter.com/SENAISC">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://www.instagram.com/senai.sc/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="https://www.linkedin.com/school/senai-sc/mycompany/">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="https://www.youtube.com/senaiconhecimento">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
