import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainData from "../data/MainData";
import styled from "styled-components";

const MainStyles = styled.div`
  background-color: ${props => props.theme.offWhite}
  text-align: center;
`;

export default class Main extends Component {
  state = MainData;
  render() {
    // Current state of toggle
    let toggled = false;
    return (
      <div>
        <Header />
        <MainStyles>
          {this.state.cards.map(card => {
            return <div key={card.id}>{card.question}</div>;
          })}
        </MainStyles>
        <Footer />
      </div>
    );
  }
}
