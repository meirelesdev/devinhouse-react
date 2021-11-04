import React, { useEffect, useState } from "react";
import { Container } from "../../../ComponentsFormik/Container";
import { Paper } from "../../../ComponentsFormik/Paper";
import { TechCard } from "../../../ComponentsFormik/TechCard";
import { getAllTechs } from "../../../services/api";
import { PageDefault } from "../../../ComponentsFormik/templates/PageDefault";
import { StyledTechContainer } from "./ListaTecnologias.styles";

export function ListaTecnologias() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    getAllTechs().then(setTecnologias);
  }, []);

  return (
    <PageDefault>
      <Container>
        <Paper>
          <h2>Todas as Tecnologias</h2>
          <StyledTechContainer>
            {tecnologias.length === 0 ? (
              <p> Nenhum usuário encontrado. </p>
            ) : (
              tecnologias.map((tech) => <TechCard key={tech.id} tecnologia={tech} />)
            )}
          </StyledTechContainer>
        </Paper>
      </Container>
    </PageDefault>
  );
}
