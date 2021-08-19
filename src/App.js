import "./App.css";
import Logo from "./components/logo";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Container } from "./styles/styles";
import { Row } from "react-styled-flexboxgrid";
import { Circle1, Circle2, Donut1, Donut2 } from "./styles/shapes";
import LeftCol from "./components/left-col";
import RightCol from "./components/right-col";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Logo />
        <Container>
          <Row>
            <LeftCol width={4} />
            <RightCol width={8} />
          </Row>
        </Container>

        <Circle1 />
        <Circle2 />
        <Donut1 />
        <Donut2 />
      </div>
    </ThemeProvider>
  );
}

export default App;
