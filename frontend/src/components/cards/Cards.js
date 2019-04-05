import React, { Component } from "react";
import styled from "styled-components";
import Card from "../card/Card";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";

const CardsStyles = styled.section`
  background-color: ${props => props.theme.grey};
  display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  justify-content: center;
`;

export default class Cards extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cards: MainData.cards });
    }, 2000);
  }

  state = {
    cards: [] //must be defined as render func runs right away
  };
  render() {
    let cardContent;
    const { cards } = this.state;

    if (cards.length === 0) {
      cardContent = <Spinner />;
    } else {
      cardContent = this.state.cards.map(card => (
        <Card key={card.id} card={card} />
      ));
    }
    return <CardsStyles>{cardContent}</CardsStyles>;
  }
}
