import React from "react";
import styled from "styled-components";

const StyledEditCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  > div {
    width: calc(50% - 25px);
  }
  > i {
    flex-basis: 25px;
    align-self: flex-end;
  }
  svg {
    margin-left: 10px;
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
      <i className="fas fa-trash" />
    </StyledEditCards>
  );
};

export default EditCardItem;
