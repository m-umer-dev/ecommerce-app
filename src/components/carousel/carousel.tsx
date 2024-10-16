import React, { useEffect, useState } from "react";
import image1 from "../../assets/careosel1 .png";
import image2 from "../../assets/careosel2.png";
import image3 from "../../assets/careosel3.png";
import { Box, Button, Grid2, Typography } from "@mui/material";
import CustomButton from "../customButtons/customButton";
import {style} from './styles'

const Carousele = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(autoPlay);
  }, [images.length]);

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FCF8F3",
        padding: "40px",
        margin: "20px",
      }}
      size={{ xl: 2, lg: 3, md: 4, sm: 3, xs: 12 }}
    >
      <Box
        sx={{
        //   background: "white",
          padding: "20px",
          maxWidth: "350px",
        }}
        
      >
        <Typography sx={style.title}>
        50+ Beautiful rooms 
        inspiration
        </Typography>
        <Typography sx={style.subTitle}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor
          nulla quis eros convallis, ut vestibulum ex fringilla.
        </Typography>

        <Button >
            <CustomButton buttonText="Explore More"/>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   background: "red",
          padding: "20px",
          width: "50%",
        }}
      >
        <Box sx={{ width: "200px", height: "300px", marginRight: "20px" }}>
          <img
            alt={`carousel-item-${currentImageIndex + 1}`}
            src={images[currentImageIndex]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                border:
                  currentImageIndex === index ? "" : "none",
                cursor: "pointer",
                opacity: currentImageIndex === index ? 1 : 0.6,
              }}
            >
              <img
                alt={`thumbnail-${index + 1}`}
                src={img}
                style={{
                    marginTop: '0px',
                  width: "100px", 
                  height: "220px", 
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Grid2>
  );
};

export default Carousele;
