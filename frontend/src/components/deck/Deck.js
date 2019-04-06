import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";
import Review from "./Review";

const DeckStyles = styled.div`
  display: flex;
  justify-content: center;
`;
const DeckBody = styled.div`
  border: 1px solid;
  text-align: center;
  padding: 40px;
`;

export default class Deck extends Component {
  state = {
    cards: [], //must be defined as render func runs right away
    decks: [],
    toggled: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cards: MainData.cards, decks: MainData.decks });
    }, 2000);
  }
  onReviewCards = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  render() {
    let deckContent = "";
    let { toggled } = this.state;

    if (toggled) {
      deckContent = (
        <Review
          deckID={this.props.match.params.handle}
          cards={this.state.cards}
          decks={this.state.decks}
        >
          Hello
        </Review>
      );
    } else {
      deckContent = (
        <div>
          <div> {this.props.match.params.handle}</div>
          <button onClick={this.onReviewCards}>Review Cards</button>
          <button>Edit Cards</button>
          <button>Options</button>
        </div>
      );
    }
    return (
      <DeckStyles>
        <DeckBody>{deckContent}</DeckBody>
      </DeckStyles>
    );
  }
}
