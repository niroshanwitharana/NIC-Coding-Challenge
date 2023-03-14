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

const EventCard = ({ event }) => {
  const apiKey = process.env.MY_API_KEY;

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
    <Card sx={{ maxWidth: 345 }}>
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
          <Link href={`${event.url}?key=${apiKey}`} passHref>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </CardActions>
    </Card>
  );
};

export default EventCard;
