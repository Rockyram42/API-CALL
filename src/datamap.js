import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function DataDetails(props) {
//   console.log(props);
  const fetchData = props.list;
//   console.log(fetchData);

  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {fetchData.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fetchData.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              props.openBox(fetchData);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            type="submit"
            onClick={() => {
              props.deleteList(fetchData._id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
