import styled from "styled-components";
import TipButton from "./TipButton";

const SelectTip = () => {
  const tipAmount = [5, 10, 15, 25, 50];

  return (
    <>
      <StyledP>Select Tip %</StyledP>
      <StyledDiv>
        {tipAmount.map((item) => (
          <TipButton key={item} Tip={item} />
        ))}
        <StyledInput type="number" placeholder="Custom" />
      </StyledDiv>
    </>
  );
};

const StyledP = styled.p`
  color: hsl(184, 14%, 56%);
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StyledInput = styled.input`
  font-size: 24px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: hsl(183, 100%, 15%);
  text-align: center;
  &:hover {
    outline: 2px solid hsl(186, 14%, 43%);
  }
  &:focus {
    outline: none;
  }

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default SelectTip;
