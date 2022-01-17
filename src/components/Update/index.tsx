import React, { useState, useEffect, useCallback } from "react";
import { Form } from "@unform/web";
import api from "../../service/api";

import { Container } from "./styles";

interface ICurso {
  id: number;
  curso: string;
  totalDeVagas: number;
  vagasDisponiveis: number;
  vagasDisponiveisAte: string;
}

const Update: React.FC = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const [oldCurso, setOldCurso] = useState<ICurso>();
  const [idCurso, setIdCurso] = useState("");

  const [newVagas, setNewVagas] = useState<number | undefined>(0);
  const [newVagasDisponiveis, setNewVagasDisponiveis] = useState<
    number | undefined
  >(0);
  const [newPrazo, setNewPrazo] = useState<string | undefined>("");

  useEffect(() => {
    api.get("/curso").then((response) => {
      setCursos(response.data);
    });
  }, []);

  const buscarCurso = async () => {
    if (isNaN(parseInt(idCurso))) {
      setNewVagas(0);
      setNewVagasDisponiveis(0);
      setNewPrazo("");
      return;
    }
    await api.get(`/curso/${idCurso}`).then((response) => {
      setOldCurso(response.data);
      setNewVagas(response.data.totalDeVagas);
      setNewVagasDisponiveis(response.data.vagasDisponiveis);
      setNewPrazo(response.data.vagasDisponiveisAte.substring(0, 10));
    });
  };

  const atualizar = useCallback(async () => {
    try {
      const cursoUpdate = {
        totalDeVagas: newVagas,
        vagasDisponiveis: newVagasDisponiveis,
        vagasDisponiveisAte: newPrazo?.substring(0, 10),
      };
      await api.put(`/curso/${idCurso}`, cursoUpdate);
    } catch (err) {
      console.log(err);
    }
  }, [newVagas, newVagasDisponiveis, newPrazo, idCurso]);
  return (
    <>
      <Container>
        <h2>
          Atualizar dados de demanda para curso de Aprendizagem Industrial
        </h2>
        <div>
          <Form onSubmit={atualizar}>
            <label>Curso:</label>
            <select
              name="curso"
              id="curso"
              onClick={() => buscarCurso()}
              onChange={(e) => setIdCurso(e.currentTarget.value)}
            >
              <option>Selecione o curso</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.curso}
                </option>
              ))}
            </select>
            <label>Total de vagas:</label>
            <input
              type="number"
              name="totalDeVagas"
              placeholder="Tota de vagas"
              value={newVagas}
              onChange={(e) => setNewVagas(e.target.valueAsNumber)}
            />
            <label>Total de vagas disponíveis:</label>
            <input
              type="number"
              name="vagasDisponiveis"
              placeholder="Tota de vagas disponíveis"
              value={newVagasDisponiveis}
              onChange={(e) => setNewVagasDisponiveis(e.target.valueAsNumber)}
            />
            <label>Reservas disponíveis até dia:</label>
            <input
              type="date"
              name="vagasDisponiveisAte"
              placeholder="Prazo para reserva"
              value={newPrazo}
              onChange={(e) => setNewPrazo(e.target.value)}
            />
            <button type="submit">Registrar demanda</button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Update;
