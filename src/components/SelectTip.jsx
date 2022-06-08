import styled from "styled-components";

const SelectTip = () => {
  return (
    <StyledDiv>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default SelectTip;
