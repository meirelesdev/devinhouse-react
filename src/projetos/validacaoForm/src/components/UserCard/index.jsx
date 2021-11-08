import React from "react";
import { CardAvatar, CardContainer, CardContent, CardHeader, CardMedia } from "../Card";
import NoUserImage from "../../assets/img/no-user-image.png";

export const UserCard = ({ usuario }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardMedia>
          <CardAvatar>
            <img src={usuario.avatar || NoUserImage} alt={usuario.nome || ""} />
          </CardAvatar>
          <span>{usuario.apelido || ""}</span>
        </CardMedia>
        <span>{usuario.profissao || ""}</span>
      </CardHeader>
      <CardContent>
        <span>Nome: {usuario.nome || ""}</span>
        <span>Nascimento: {usuario.dataNascimento || ""}</span>
        <span>Tecnologia: {usuario.tecnologia.titulo || ""}</span>
      </CardContent>
    </CardContainer>
  );
};
