import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import * as actions from "./action";
import { connect } from "react-redux";
import Swal from "sweetalert2";

function PostModal(props) {
//   console.log(props);
  const [fields, setFileds] = useState();

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  }));
  const classes = useStyles();
  const handelChange = (e) => {
    setFileds({
      ...fields,
      [e.target.id]: [e.target.value],
    });
  };
  const handelSubmitCard = (e) => {
    props.onClose()
    e.preventDefault();
    Swal.fire({
      title: "Allow to Create Card",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Create",
      cancelButtonText: "Ignor",
    }).then((result) => {
      if (result.value) {
        props.createCard(fields);
        Swal.fire("Created", "Your Card has been Created.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Card has  not been Created ", "error");
      }
    });
    
  };

  return (
    <div>
      <Modal
        open={props.modalStatus}
        onClose={() => {
          props.onClose();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Form onSubmit={handelSubmitCard}>
            <Form.Group>
              <TextField
                label="Enter Title"
                type="text"
                className="form-control"
                id="title"
                onChange={handelChange}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <TextareaAutosize
                rowsMin={7}
                placeholder=" Enter Description"
                style={{ width: "100%" }}
                id="content"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Create Card
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default connect(null, actions)(PostModal);
