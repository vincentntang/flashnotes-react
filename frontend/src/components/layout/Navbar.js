import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyles = styled.nav`
  background-color: ${props => props.theme.grey}
  width: 100%;
  display: flex;
  padding: 10px;
  background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  a {
    color: white;
  }
  .home {
    font-weight: bold;
    flex-basis: 120px;
  }
  ul {
    padding-left: 0px;
    margin: 0px;
  }
  ul {
    display:flex;
    justify-content: flex-end;
    width: 100%;
  }
  ul li {
    list-style-type:none;
    margin-left: 10px;
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <NavbarStyles>
          <Link to="/" className="home">
            Flash Notes
          </Link>
          <ul>
            <li>
              <Link to="/decks">Decks</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </NavbarStyles>
      </div>
    );
  }
}
