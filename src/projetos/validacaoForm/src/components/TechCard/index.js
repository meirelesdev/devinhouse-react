import React from "react";
import { CardAvatar, CardContainer, CardContent, CardHeader } from "../Card";

export const TechCard = ({ tecnologia }) => {
  return (
    <CardContainer>
      <CardHeader>
        <span>{tecnologia.titulo}</span>
        <CardAvatar>
          <img src={tecnologia.logo} alt={tecnologia.titulo} />
        </CardAvatar>
      </CardHeader>
      <CardContent>
        <span>Descrição: {tecnologia.descricao}</span>
        <div style={{ display: "flex", marginTop: "1em" }}>
          {tecnologia.links.length >= 0 &&
            tecnologia.links.map((link, index) => (
              <a key={index} href={link} style={{ marginRight: "1em" }}>
                {`Link ${index + 1}`}
              </a>
            ))}
        </div>
      </CardContent>
    </CardContainer>
  );
};
