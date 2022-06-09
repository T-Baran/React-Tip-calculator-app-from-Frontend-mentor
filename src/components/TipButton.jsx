import React from "react";
import styled from "styled-components";
const TipButton = ({ Tip }) => {
  return <Button>{Tip}</Button>;
};
const Button = styled.button`
  background-color: hsl(183, 100%, 15%);
  border-radius: 5px;
  color: #fff;
  padding: 0.5rem;
  font-size: 24px;
  border: none;
  text-align: center;
  /* height: 50px; */

  &::after {
    content: " %";
  }
  &:hover {
    background-color: hsl(172, 67%, 45%);
  }
`;
export default TipButton;
