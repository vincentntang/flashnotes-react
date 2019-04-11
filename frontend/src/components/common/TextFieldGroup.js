import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextFieldStyles = styled.div`
  text-align: center;
  padding: 50px;
  border: 1px solid red;
  flex: 1;
  background-color: ${props => props.theme.offWhite};
  p {
    color: ${props => (props.toggled ? "blue" : "green")};
  }
`;
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <TextFieldStyles>
      <input type={type} />
    </TextFieldStyles>
  );
};

export default TextFieldGroup;
