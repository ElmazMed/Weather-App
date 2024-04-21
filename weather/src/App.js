import "./App.css";
import HomePage from "./Components/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Translation } from "./TranslitionContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const [fontFamily, setFontFamily] = useState("Jost");
  const theme = createTheme({
    typography: {
      fontFamily: fontFamily,
    },
  });
  const { t, i18n } = useTranslation();
  return (
    <>
      <Translation.Provider value={{ t, i18n, setFontFamily }}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Translation.Provider>
    </>
  );
}

export default App;
