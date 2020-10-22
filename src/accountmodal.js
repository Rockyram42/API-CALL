import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Form, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as actions from "./authaction";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

function AccountModal(props) {
  console.log(props);

  let [fields, setFields] = useState();
  let [helperText, setHelperText] = useState(false)

  // console.log(fields);

  const handelChange = (e) => {
    setFields({ ...fields, [e.target.id]: [e.target.value] });
  };
  const handelSubmit = (e) => {
    e.preventDefault()
    props.newUserLogin(fields)
    // console.log(fields)
    // if(validate()){
      console.log('success');
    // }
  };

//  const validate = () => {
//     let formVlaid = true;
//     let helperText = false;
//     let fileds = this.state;
//     if (!fileds.name || !fileds.email || !fileds.password) {
//       formVlaid = false;
//       helperText = true;
//     }
//     setHelperText({ helperText: helperText });
//     return formVlaid;
//   }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 800,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-45%)",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={props.openStatus}
        onClose={() => {
          props.Close();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="Side-col side-colCreateAccount">
            <div className="signin-Form create-signinForm">
              <h2 className="form-Head">Create an account</h2>
              <Form onSubmit={handelSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <TextField
                        // error={this.state.helperText ? true : false}
                        label="First name"
                        type="text"
                        variant="outlined"
                        className="form-control"
                        helperText={
                          helperText ? "Invalid entery" : null
                        }
                        id="name"
                        onChange={handelChange}
                        // onChange={this.handelChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <TextField
                    // error={this.state.helperText ? true : false}
                    label="Email"
                    type="email"
                    variant="outlined"
                    className="form-control "
                    helperText={helperText ? "Invalid entery" : null}
                    id="email"
                    onChange={handelChange}
                    // onChange={this.handelChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <TextField
                    // error={this.state.helperText ? true : false}
                    label="Password"
                    type="password"
                    variant="outlined"
                    className="form-control "
                    helperText={helperText ? "Invalid entery" : null}
                    id="password"
                    onChange={handelChange}
                  />
                </Form.Group>
                <Form.Group className="text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form.Group>
              </Form>
              <h2 className="sign-other">Or</h2>
              <div>
                <div className=" text-center">
                  <Button
                    color="primary"
                    className="signin-Create"
                    onClick={() => {
                      props.Close();
                    }}
                  >
                    signin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default connect(null, actions)(AccountModal);
