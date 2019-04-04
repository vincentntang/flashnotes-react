import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 30px;
`;

const Header = props => {
  return (
    <HeaderStyles className="top">
      <h1>Flash Notes</h1>
    </HeaderStyles>
  );
};

export default Header;
