import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";
// import Cards from "../cards/Cards";

const LandingStyles = styled.div`
  background-color: ${props => props.theme.offWhite}
  text-align: center;
`;

export default class Landing extends Component {
  render() {
    return (
      <div>
        <LandingStyles className="container">Hey World</LandingStyles>
      </div>
    );
  }
}
