import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainData from "../data/MainData";
import styled from "styled-components";
import Spinner from "../common/Spinner";
import Cards from "./Cards";

const MainStyles = styled.div`
  background-color: ${props => props.theme.offWhite}
  text-align: center;
`;

export default class Main extends Component {
  componentDidMount() {
    this.setState({ cards: MainData.cards });
  }

  state = {
    cards: [] //must be defined as render func runs right away
  };
  render() {
    // Current state of toggle
    let toggled = false;
    let cardContent;

    if (this.state.cards === null) {
      cardContent = <Spinner />;
    } else {
      cardContent = <Cards />;
    }
    return (
      <div>
        <Header />
        <MainStyles>
          {cardContent}
          {this.state.cards.map(card => {
            return <div key={card.id}>{card.question}</div>;
          })}
        </MainStyles>
        <Footer />
      </div>
    );
  }
}
