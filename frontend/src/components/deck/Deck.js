import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";

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
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cards: MainData.cards, decks: MainData.decks });
    }, 2000);
  }
  state = {
    cards: [], //must be defined as render func runs right away
    decks: []
  };

  render() {
    return (
      <DeckStyles>
        <DeckBody>
          <div>
            <div> {this.props.match.params.handle}</div>
            <button>Review Cards</button>
            <button>Edit Cards</button>
            <button>Options</button>
          </div>
        </DeckBody>
      </DeckStyles>
    );
  }
}
