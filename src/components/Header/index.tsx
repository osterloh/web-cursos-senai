import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <div className="conteudo">
          Quer receber nosso conteúdo exclusivo?{" "}
          <a href="https://fiesc.com.br/inscricoes">Inscreva-se!</a>
        </div>
        <div className="linksInstitucionais">
          <div id="linkCasas">
            <a href="https://fiesc.com.br/">FIESC</a>
            <a href="https://www.ciesc.com.br/">CIESC</a>
            <a href="https://sesisc.org.br/">SESI</a>
            <a href="https://sc.senai.br/">SENAI</a>
            <a href="https://ielsc.org.br/">IEL</a>
          </div>
          <div id="bannerSenai">
            <a href="https://sc.senai.br/">
              <img src={logo} alt="logoSenai" />
            </a>
          </div>
          <div id="linksMidias">
            <div id="redes">
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
            <div id="internos">
              <a href="https://sc.senai.br/compliance">Compliance</a>
              <a href="https://transparencia.sc.senai.br/">Transparência</a>
              <a href="https://intranet.sesisc.org.br/intranet/php/login.php?">
                Intranet
              </a>
            </div>
          </div>
        </div>
        <div id="linkSobre">
          <a href="https://sc.senai.br/sobre-senai">SOBRE O SENAI</a>
          <a href="https://sc.senai.br/educacao">EDUCAÇÃO</a>
          <a href="https://sc.senai.br/tecnologia-e-inovacao">
            TECNOLOGIA E INOVAÇÃO
          </a>
          <a href="https://sc.senai.br/faculdade-senai">FACULDADE SENAI</a>
          <a href="https://blog.sesisenai.org.br/">BLOG SESI SENAI</a>
        </div>
      </Container>
    </>
  );
};

export default Header;
