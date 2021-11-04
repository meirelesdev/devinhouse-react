import { Link } from "react-router-dom";
import { HeaderContainer, StyledHeader } from "./Header.styles";
import { ThemeSelector } from "../ThemeSelector";

export function Header({ title }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>
          <Link to="/formik">{title}</Link>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/formik" >Início</Link>
          <Link to="/formik/usuarios">Usuários</Link>
          <Link to="/formik/tecnologias">Tecnologias</Link>
          <Link to="/formik/usuarios/novo">Novo Usuario</Link>
          <Link to="/formik/tecnologias/novo">Nova Tecnologia</Link>
          <ThemeSelector />
          <Link to={{pathname: "https://google.com.br"}} target="_blank" >Link externo para: Google</Link>
        </div>
      </HeaderContainer>
    </StyledHeader>
  );
}
