import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
