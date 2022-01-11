import React, { useCallback, useState, InputHTMLAttributes } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import api from "../../service/api";

import { Container } from "./styles";

interface CursoFormData extends InputHTMLAttributes<HTMLInputElement> {
  curso: string;
  totalDeVagas: number;
  vagasDisponiveisAte: string;
}

const Register: React.FC = () => {
  const [newCurso, setNewCurso] = useState("");
  const [newVagas, setNewVagas] = useState(0);
  const [newPrazo, setNewPrazo] = useState("");

  const history = useHistory();

  const cadastrar = useCallback(
    async (data: CursoFormData) => {
      try {
        const curso = {
          curso: newCurso,
          totalDeVagas: newVagas,
          vagasDisponiveisAte: newPrazo,
        };

        console.log(curso);
        await api.post("/curso", curso);
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    [newCurso, newVagas, newPrazo, history]
  );
  return (
    <>
      <Container>
        <h2>Registrar nova demanda para curso de Aprendizagem Industrial</h2>
        <div>
          <Form onSubmit={cadastrar}>
            <label>Curso:</label>
            <input
              type="text"
              name="curso"
              onChange={(e) => setNewCurso(e.target.value)}
              placeholder="Curso"
            />
            <label>Total de vagas:</label>
            <input
              type="number"
              name="totalDeVagas"
              onChange={(e) => setNewVagas(e.target.valueAsNumber)}
              placeholder="Tota de vagas"
            />
            <label>Reservas disponíveis até dia:</label>
            <input
              type="date"
              name="vagasDisponiveisAte"
              onChange={(e) => setNewPrazo(e.target.value)}
              placeholder="Prazo para reserva"
            />
            <button type="submit">Registrar demanda</button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Register;
