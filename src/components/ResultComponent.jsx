import DisplayValue from "./DisplayValue";
import styled from "styled-components";

const Resultcomponent = () => {
  return (
    <ResultContainer>
      <DisplayValue text="Tip amount" />
      <DisplayValue text="Total" />
      <StyledButton>RESET</StyledButton>
    </ResultContainer>
  );
};
const ResultContainer = styled.div`
  border-radius: 15px;
  padding: 0.75rem 0.5rem 1.5rem 0.5rem;
  background-color: hsl(183, 100%, 15%);
`;
const StyledButton = styled.button`
  width: 90%;
  padding: 5px 0 5px 0;
  display: block;
  margin: auto;
  border-radius: 5px;
  border: none;
  background-color: hsl(172, 67%, 45%);
  font-size: 24px;
  letter-spacing: 3px;
  color: hsl(182, 100%, 25%);

  &:hover {
    border: none;
    background-color: hsl(182, 100%, 25%);
    color: hsl(172, 62%, 14%);
  }
`;

export default Resultcomponent;
