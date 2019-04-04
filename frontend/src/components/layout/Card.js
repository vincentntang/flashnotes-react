import React from "react";

const Card = props => {
  console.log(props);
  return (
    <div>
      <p>{props.card.question}</p>
      <p>{props.card.answer}</p>
    </div>
  );
};

export default Card;
ß;
