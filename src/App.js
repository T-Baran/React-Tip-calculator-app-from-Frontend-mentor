import { GlobalStyled } from "./components/GlobalStyled";
import styled from "styled-components";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Header />
      <StyledContainer>
        <InputComponent />
        <ResultComponent />
      </StyledContainer>
    </div>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 1.5rem;
  height: 85vh;
`;

export default App;
