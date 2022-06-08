import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledH1>
      SPLI
      <br />
      TTER
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  color: hsl(183, 100%, 15%);
  letter-spacing: 7px;
  text-align: center;
  margin-top: 40px;
`;

export default Header;
