import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyles = styled.nav`
  background-color: ${props => props.theme.grey}
  width: 100%;
  display: flex;
  padding: 10px;
  .home {
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
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </NavbarStyles>
      </div>
    );
  }
}
