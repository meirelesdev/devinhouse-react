import { useThemeToggler } from "../../contexts/app-theme-context";
import { MdModeNight, MdLightMode } from "react-icons/md";
import { ThemeButton } from "./ThemeSelector.styles";

export const ThemeSelector = () => {
  const { isDark, toggleTheme } = useThemeToggler();

  return (
    <div>
      <ThemeButton onClick={toggleTheme}>{isDark ? <MdLightMode /> : <MdModeNight />}</ThemeButton>
    </div>
  );
};
