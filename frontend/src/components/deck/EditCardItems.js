import React from "react";
import styled from "styled-components";

const StyledEditCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 50%;
  }
`;
const StyledQuestion = styled.div``;
const StyledAnswer = styled.div``;

const EditCardItem = props => {
  return (
    <StyledEditCards>
      <StyledQuestion>{props.question}</StyledQuestion>
      <StyledAnswer>{props.answer}</StyledAnswer>
    </StyledEditCards>
  );
};

export default EditCardItem;
