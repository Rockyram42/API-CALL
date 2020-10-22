import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./action";
import InputBase from "@material-ui/core/InputBase";
import PostModal from "./postModal";
import EditModal from "./editmodal";
import Swal from "sweetalert2";
import DataDetails from "./datamap";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Notification from "./notification";

function View(props) {
  const [open, setOpen] = useState(false);
  const [edit, setedit] = useState(false);
  const [editlist, setEditlist] = useState();
  const [search, setSearch] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (status) => {
    setOpen(status);
    setedit(status);
  };

  const editBox = (editInput) => {
    setedit(true);
    setEditlist(editInput);
    // console.log(editInput);
  };

  useEffect(() => {
    props.getApiData();
  }, []);

  const handelSearch = (e) => {
    let cardData = props.cardList;
    let keyword = e.target.value;
    let searchFilter = cardData.filter((data) => {
      return data.title.toLowerCase().includes(keyword.toLowerCase());
    });

    setSearch(searchFilter);
  };

  const handelDeleteCard = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        // console.log("delete");
        props.deleteCard(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // console.log("cancel");

        Swal.fire("Cancelled", "Your file is safe :)", "error");
      }
    });
  };

  let getProps = search ? search : props.cardList;
  // console.log(getProps);
  const cards =
    getProps &&
    getProps.map((item, index) => {
      return (
        <DataDetails
          key={index}
          list={item}
          deleteList={handelDeleteCard}
          openBox={editBox}
        />
      );
    });

  return (
    <div className="">
      <AppBar position="static">
        <Container>
          <Box display="flex" p={2}>
            <Box flexGrow={1}>
              <Typography variant="h6"> User </Typography>
            </Box>
            <Box>
              <InputBase
                placeholder="Search…"
                id="search"
                onChange={handelSearch}
              />
            </Box>
            <Box>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </Box>
            <Box>
              <Button color="inherit" onClick={handleOpen}>
                Post
              </Button>
              <PostModal modalStatus={open} onClose={handleClose} />
            </Box>
            {edit ? (
              <EditModal
                modalStaus={edit}
                editList={editlist}
                Close={handleClose}
              />
            ) : null}
            <Box>
              <Link to="/">
                <Button color="inherit"> SignOut </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </AppBar>
      {props.loading ? <div className="loader"> </div> : null}
      <Container className="mt-5">
        <Row>
          <Col sm={9}>
            <Grid container spacing={3}>
              {cards}
            </Grid>
          </Col>
          <Col sm={3}>
            <Notification />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardList: state.data,
    loading: state.isLoader,
  };
};

export default connect(mapStateToProps, actions)(View);
