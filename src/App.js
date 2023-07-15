import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#fff",
    body: "fff",
    footer: "#8A1C4A",
  },
};

const App = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default App;
