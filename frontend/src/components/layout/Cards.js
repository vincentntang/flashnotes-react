import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsStyles = styled.section`
  background-color: ${props => props.theme.grey};
  display: flex;
  // flex-wrap: wrap;
  // align-items: center;
`;

export default class Cards extends Component {
  render() {
    return (
      <CardsStyles>
        {this.props.cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </CardsStyles>
    );
  }
}
