/** @jsxImportSource @emotion/react */
import "./App.css";
import styled from "@emotion/styled";
import Projects from "./components/projects";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
function App() {
  return (
    <StyledDiv>
      <Projects />
    </StyledDiv>
  );
}

export default App;
