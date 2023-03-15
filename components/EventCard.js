import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  header: {
    // backgroundColor: '', // Customize the background color
    color: '#5ac1d0 !important', // Customize the text color
    fontWeight: 550, // Customize the font weight
    fontSize: '1.1rem !important', // Customize the font size
  },
});

const EventCard = ({ event }) => {

  const apiKey = process.env.MY_API_KEY;
  console.log(apiKey);

  const classes = useStyles();

  const getDates = (dates) => {
    let dateStr = "";
    const dateValues = dates.map((item) => item.date);
    dateValues.forEach((item, index) => {
      dateStr += item;
      if (index < dates.length - 1) {
        dateStr += " | ";
      }
    });

    console.log("dateStr " + dateStr);
    return dateStr;
  };



  return (
    <Card sx={{ maxWidth: 345 }} className={classes.header}>  
      <CardHeader
        title={event.name}
        subheader={`Dates : ${event.dates ? getDates(event.dates) : ""}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={event.image}
        alt={event.name}
      />
      <CardActions
        disableSpacing
        style={{ justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <CardActions>
          <Link href={`${event.url}&api_key=${apiKey}`} passHref>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </CardActions>
    </Card>
  );
};

export default EventCard;
