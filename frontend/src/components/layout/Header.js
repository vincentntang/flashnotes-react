import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 30px;
`;

const Header = props => {
  return (
    <HeaderWrapper className="top">
      <h1>Flash Notes</h1>
    </HeaderWrapper>
  );
};

export default Header;
