import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./types/ThemeProvider";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
