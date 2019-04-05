import React, { Component } from "react";
import MainData from "./data/MainData";
import styled from "styled-components";
import Spinner from "./common/Spinner";
import Cards from "./cards/Cards";

const LandingStyles = styled.div`
  background-color: ${props => props.theme.offWhite}
  text-align: center;
`;

export default class Main extends Component {
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
      cardContent = <Cards cards={cards} />;
    }
    return (
      <div>
        <LandingStyles>{cardContent}</LandingStyles>
      </div>
    );
  }
}
