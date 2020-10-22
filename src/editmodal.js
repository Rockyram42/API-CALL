import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import * as actions from "./action";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

function EditModal(props) {
  let edit = props.editList;
  console.log(props);
  // return false;

  const [fields, setFileds] = useState({
    title: "",
    content: "",
  });
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

  const handeEditSubmit = (id) => {
    props.Close();
    Swal.fire({
      title: "Are you Sure",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        props.updateCard(id, fields);
        Swal.fire("Changed", "Your Card has been Edited", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Nothing to be Change", "error");
      }
    });
  };

  return (
    <div>
      <Modal
        open={props.modalStaus}
        onClose={() => {
          props.Close();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Form>
            <Form.Group>
              <TextField
                defaultValue={edit.title}
                type="text"
                className="form-control"
                id="title"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group>
              <TextareaAutosize
                rowsMin={7}
                defaultValue={edit.content}
                style={{ width: "100%" }}
                id="content"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "center" }}>
              <Button
                color="primary"
                type="button"
                onClick={() => {
                  handeEditSubmit(edit._id);
                }}
              >
                Save
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default connect(null, actions)(EditModal);
