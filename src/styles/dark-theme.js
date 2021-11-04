import { lightTheme } from "./light-theme";

export const darkTheme = {
  ...lightTheme,
  color: {
    primary: "#314DA6",
    secondary: "",
    success: "#197F1C",
    warning: "#BB7C2E",
    error: "#BA3E62",
    info: "#008DD3",
    white: "#FFF",
    gray: "rgba(255,255,255,0.1)",
    black: "#DDD",
    text: "#FFF",
    // background: "#001B3F",
    background: "#223",
    // paper: "#314DA6",
    paper: "#314DA6",
  },
  shadow: {
    default: "1px 1px 2px rgba(0,0,0,0.2) ",
  },
};
