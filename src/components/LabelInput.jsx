import styled from "styled-components";
import dolar from "../images/icon-dollar.svg";
import human from "../images/icon-person.svg";

const LabelInput = ({ label, image }) => {
  let icon = { dolar: dolar, human: human };

  const StyledInput = styled.input`
    background-image: url(${icon[image]});
    background-repeat: no-repeat;
    background-position: 8px 50%;
    background-color: #e8efef;
    border: none;
    border-radius: 5px;
    text-align: right;
    padding: 4px 8px;
    font-size: 24px;
    color: hsl(183, 100%, 15%);
    margin-bottom: 1rem;
    margin-top: 1rem;

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
