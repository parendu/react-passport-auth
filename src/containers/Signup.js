import React, { Component } from "react";
import {
  HelpBlock,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      yoursign: "",
      partnersign: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.username.length > 0 &&
      this.state.yoursign.length > 0 &&
      this.state.partnersign.length > 0 &&
      this.state.password > 0
    );
  }

   handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }
  
  render() {
    return (
      <div className="Signup">
      <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            value={this.state.username}
            onChange={this.handleChange}
           />
         </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

          <FormGroup controlId="yoursign" bsSize="large">
          <ControlLabel>Your Sign</ControlLabel>
          <FormControl
            value={this.state.yoursign}
            onChange={this.handleChange}
           
          />
             </FormGroup>
          <FormGroup controlId="partnersign" bsSize="large">
          <ControlLabel>Match Sign</ControlLabel>
          <FormControl
            value={this.state.partnersign}
            onChange={this.handleChange}
         
          />
        </FormGroup>
                   <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
             >
            Register
          </Button>
      </form>
      </div>
    );
  }


}