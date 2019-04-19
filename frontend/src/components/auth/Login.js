import React, { Component } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

const StyledLogin = styled.section`
  text-align: center;
`;
const StyledHeader = styled.div``;
const StyledForm = styled.form``;

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    auth: {}
  };

  componentDidMount() {}
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <StyledLogin>
        <StyledHeader>
          <h1>Login</h1>
        </StyledHeader>
        <StyledForm onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Email Address"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
          <input type="submit" />
        </StyledForm>
      </StyledLogin>
    );
  }
}

Login.propTypes = {
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
