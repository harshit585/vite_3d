import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./image/img/bg.jpeg");
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
