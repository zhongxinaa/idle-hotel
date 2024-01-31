import { Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const HotelHomePage = () => {
  const [hotels, setHotels] = useState([]);
  const displaData = () => {
    fetch(`https://books-data-api.onrender.com/hotels`)
      .then((res) => {
        res.json().then((result) => {
          console.log(result);
          setHotels(result);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displaData();
  }, []);

  return (
    <Container
      style={{ margin: "auto", marginBottom: "40px", marginTop: "100px" }}
    >
      <Grid container gap={"20px"} margin="auto">
        {hotels &&
          hotels.map((h) => {
            return (
              <Card key={h.id} style={{ textAlign: "center", padding: "10px" }}>
                <img src={h.image_url} width={"260px"} alt={h.id} />
                <Typography>Category : {h.category}</Typography>
                <Typography>Room Type : {h.type_of_room}</Typography>
                <Typography>Bed Type : {h.bed_type}</Typography>
                <Typography>Total Cost : {h.cost}</Typography>
                <Typography>Number Of Person : {h.no_of_persons}</Typography>
                <Typography>{h.booked}</Typography>
              </Card>
            );
          })}
      </Grid>
    </Container>
  );
};
export default HotelHomePage;
