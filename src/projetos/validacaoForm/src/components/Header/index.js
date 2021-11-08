import { Link } from "react-router-dom";
import { HeaderContainer, StyledHeader } from "./Header.styles";
import { ThemeSelector } from "../ThemeSelector";

export function Header({ title }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>
          <Link to="/projetos/validacaoform">{title}</Link>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/projetos/validacaoform" >Início</Link>
          <Link to="/projetos/validacaoform/usuarios">Usuários</Link>
          <Link to="/projetos/validacaoform/tecnologias">Tecnologias</Link>
          <Link to="/projetos/validacaoform/usuarios/novo">Novo Usuario</Link>
          <Link to="/projetos/validacaoform/tecnologias/novo">Nova Tecnologia</Link>
          <ThemeSelector />
          <Link to={{pathname: "https://google.com.br"}} target="_blank" >Link externo para: Google</Link>
        </div>
      </HeaderContainer>
    </StyledHeader>
  );
}
