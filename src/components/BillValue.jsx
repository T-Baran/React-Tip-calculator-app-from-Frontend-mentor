import styled from "styled-components";
import img from "../images/icon-dollar.svg";

const BillValue = () => {
  return (
    <StyledFlex>
      <label htmlFor="BillValue">Bill</label>
      <StyledInput type="number" id="BillValue" placeholder="0" />
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  color: hsl(184, 14%, 56%);
`;

const StyledInput = styled.input`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 8px 50%;
  background-color: hsl(189, 41%, 97%);
  border: none;
  border-radius: 5px;
  text-align: right;
  padding: 8px;
  font-size: 24px;
  color: hsl(183, 100%, 15%);

  -moz-appearance: textfield;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default BillValue;
