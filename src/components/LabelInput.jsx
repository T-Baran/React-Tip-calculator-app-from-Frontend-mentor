import styled from "styled-components";
import dolar from "../images/icon-dollar.svg";
import human from "../images/icon-person.svg";

const LabelInput = ({ label, image }) => {
  let icon = { dolar: dolar, human: human };

  const StyledInput = styled.input`
    background-image: url(${icon[image]});
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
  const StyledFlex = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    color: hsl(184, 14%, 56%);
  `;

  return (
    <StyledFlex>
      <label htmlFor="LabelInput">{label}</label>
      <StyledInput type="number" id="LabelInput" placeholder="0" />
    </StyledFlex>
  );
};

export default LabelInput;
