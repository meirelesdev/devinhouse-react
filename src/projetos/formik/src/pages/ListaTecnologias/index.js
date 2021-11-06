import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Paper } from "../../components/Paper";
import { TechCard } from "../../components/TechCard";
import { getAllTechs } from "../../services/api";
import { PageDefault } from "../../components/templates/PageDefault";
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
