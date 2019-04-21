import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

const StyledRegister = styled.section`
  text-align: center;
`;
const StyledHeader = styled.div``;
const StyledForm = styled.form``;

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/decks");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(userData, this.props.history); // pass history to actions
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <StyledRegister>
        <StyledHeader>
          <h1>Register</h1>
        </StyledHeader>
        <StyledForm onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Name"
            name="name"
            type="name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />
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
          <TextFieldGroup
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />
          <input type="submit" />
        </StyledForm>
      </StyledRegister>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  registerUser: PropTypes.func.isRequired,
  auth: state.auth,
  error: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register)); // see auth actions, you pass history to the reducer
