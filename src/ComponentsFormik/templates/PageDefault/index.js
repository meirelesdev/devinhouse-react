import { Header } from "../../Header";

export const PageDefault = ({ children }) => {
  return (
    <>
      <Header title="MeuCadastro.com" />
      <main>{children}</main>
    </>
  );
};
