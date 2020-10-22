import React, { Component } from "react";
import { Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountModal from './accountmodal'

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      userKey: "",
      open: false,
      // helperText: false,
      loggedIn : false

    };
  }
  openButton = (e) => {
    this.setState({open : true})
  }
  handelclosemodal = () => {
    this.setState({open : false})
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  validate = (e) => {
    let formVlaid = true;
    let helperText = false;
    let fileds = this.state;
    if (!fileds.userID || !fileds.userKey) {
      formVlaid = false;
      helperText = true;
    }
    this.setState({ helperText: helperText });
    return formVlaid;
  };
  handelSubmit = (e) => {
    if (this.validate()) {
      console.log("success");
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="Side-col">
          <div className="signin-Form">
            <h2 className="form-Head">Sign in</h2>
            <Form onSubmit={this.handelSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <TextField
                  error={this.state.helperText ? true : false}
                  label="Enter your email"
                  type="email"
                  variant="outlined"
                  className="form-control"
                  id="userID"
                  onChange={this.handelChange}
                  helperText={this.state.helperText ? "InValid entry." : null}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <TextField
                  error={this.state.helperText ? true : false}
                  label="Password"
                  type="password"
                  variant="outlined"
                  className="form-control "
                  id="userKey"
                  onChange={this.handelChange}
                  helperText={this.state.helperText ? "InValid entry." : null}
                />
              </Form.Group>
              <Form.Group className="text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
              </Form.Group>
            </Form>
            <h2 className="sign-other">Or</h2>
            <div>
              <div className=" text-center">
                <Button
                  color="primary"
                  className="signin-Create"
                  onClick={this.openButton}
                >
                  Create an account
                </Button>
              </div>
            </div>
            <AccountModal openStatus={this.state.open}  Close={this.handelclosemodal}/>
          </div>
        </div>
      </div>
    );
  }
}
