import React from "react";
import styled from "styled-components";

const DisplayValue = ({ text }) => {
  return (
    <StyledDiv>
      <div>
        <StyledLabel>{text}</StyledLabel>
        <StyledP>/ person</StyledP>
      </div>
      <StyledResult>50$</StyledResult>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;
const StyledLabel = styled.p`
  color: #fff;
`;
const StyledP = styled.p`
  color: hsl(184, 14%, 56%);
  font-size: 16px;
`;
const StyledResult = styled.p`
  color: hsl(172, 67%, 45%);
  font-size: 24px;
`;

export default DisplayValue;
