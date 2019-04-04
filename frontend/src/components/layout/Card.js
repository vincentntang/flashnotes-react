import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  text-align: center;
  padding: 50px;
  border: 1px solid red;
  flex: 1;
  background-color: ${props => props.theme.offWhite};
`;

const Card = props => {
  console.log(props);
  return (
    <CardStyles>
      <p>{props.card.question}</p>
      <p>{props.card.answer}</p>
    </CardStyles>
  );
};

export default Card;
