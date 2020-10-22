import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

function Notification() {
  return (
    <div className="notiFication">
      <Typography gutterBottom variant="h5" component="h2" color="secondary">
        Notification
      </Typography>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
}

export default Notification;
