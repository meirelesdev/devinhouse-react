import React, { useEffect, useState } from "react";
import { Paper } from "../../components/Paper";
import { Container } from "../../components/Container";
import { PageDefault } from "../../components/templates/PageDefault";
import { StyledUserContainer } from "./ListaUsuarios.styles";
import { UserCard } from "../../components/UserCard";
import { getAllUsers } from "../../services/api";

export function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsuarios);
  }, []);

  return (
    <PageDefault>
      <Container>
        <Paper>
          <h2>Todos os usuários</h2>
          <StyledUserContainer>
            {usuarios.length === 0 ? (
              <p> Nenhum usuário encontrado. </p>
            ) : (
              usuarios.map((usuario) => <UserCard key={usuario.id} usuario={usuario} />)
            )}
          </StyledUserContainer>
        </Paper>
      </Container>
    </PageDefault>
  );
}
