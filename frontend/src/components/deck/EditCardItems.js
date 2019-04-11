import React from "react";
import styled from "styled-components";

const StyledEditCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 25px);
  }
  > button {
    flex-basis: 50px;
  }
`;
const StyledQuestion = styled.div``;
const StyledAnswer = styled.div``;

const EditCardItem = props => {
  return (
    <StyledEditCards>
      <StyledQuestion>{props.question}</StyledQuestion>
      <StyledAnswer>{props.answer}</StyledAnswer>
      <i className="fas fa-pen" />
      <i className="fas fa-graduation-cap" />
    </StyledEditCards>
  );
};

export default EditCardItem;
