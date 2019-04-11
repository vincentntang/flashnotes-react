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
const StyledInfo = styled.div``;

const StyledErrors = styled.div``;
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
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <StyledInfo>{info}</StyledInfo>}
      {error && <StyledErrors>{error}</StyledErrors>}
    </TextFieldStyles>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  disabled: PropTypes.string
};

export default TextFieldGroup;
