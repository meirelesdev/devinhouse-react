import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/dark-theme";
import { lightTheme } from "../styles/light-theme";

const themeContext = createContext();
const AppThemeProvider = themeContext.Provider;

export const useThemeToggler = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useThemeToggler must be used within an AppThemeProvider.");
  }
  return context;
};

export const AppTheme = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(getFromLocalStorage, []);
  useEffect(setToLocalStorage, [isDark]);

  function getFromLocalStorage() {
    const themeFromLS = localStorage.getItem("app-dark-mode");
    console.log(themeFromLS);
    if (themeFromLS) {
      setIsDark(themeFromLS === "true");
    }
  }

  function setToLocalStorage() {
    return localStorage.setItem("app-dark-mode", isDark);
  }

  function toggleTheme() {
    setIsDark((d) => !d);
  }

  return (
    <AppThemeProvider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </AppThemeProvider>
  );
};
