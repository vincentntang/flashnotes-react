import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MainData from "../data/MainData";
import Spinner from "../common/Spinner";

const DeckStyles = styled.section`
  background-color: #eee;
  text-align:center;
  // background-color: ${props => props.theme.grey};
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
  a {
    margin-left: 15px;
  }
`;

const DeckBody = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Cards extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ decks: MainData.decks });
    }, 500);
  }

  state = {
    decks: []
  };
  render() {
    let deckContent;
    const { decks } = this.state;

    if (decks.length === 0) {
      deckContent = <Spinner />;
    } else {
      deckContent = this.state.decks.map(deck => {
        return (
          <DeckBody>
            <Link to={`/decks/${deck.id}`}>{deck.id}</Link>
            <p>{deck.title}</p>
          </DeckBody>
        );
      });
    }
    console.log(this.state.decks);

    return (
      <DeckStyles>
        {this.state.decks.length !== 0 && <Link to="/decks/add">Add Deck</Link>}
        {this.state.decks.length !== 0 && <Link to="/decks/stats">Stats</Link>}
        {deckContent}
      </DeckStyles>
    );
  }
}
