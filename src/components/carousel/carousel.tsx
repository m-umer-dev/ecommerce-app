import React from "react";
import image1 from "../../assets/careosel1.png";
import image2 from "../../assets/careosel2.png";
import image3 from "../../assets/careosel3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, Typography } from "@mui/material";

const Carousele = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        margin: "20px",
      }}
    >
      {/* Left Side Text */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "white",
          padding: "20px",
        }}
      >
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor 
          nulla quis eros convallis, ut vestibulum ex fringilla. 
        </Typography>
      </Grid>

      {/* Right Side Carousel */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "red",
          padding: "20px",
        }}
      >
        <Carousel autoPlay width="100%">
          <div>
            <img alt="carousel-item-1" src={image1} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt="carousel-item-2" src={image2} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img alt="carousel-item-3" src={image3} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Carousele;
