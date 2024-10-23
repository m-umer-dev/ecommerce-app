import { useEffect, useState } from "react";
import image1 from "../../assets/careosel1 .png";
import image2 from "../../assets/careosel2.png";
import image3 from "../../assets/careosel3.png";
import { Box, Grid2, Typography } from "@mui/material";
import CustomButton from "../customButtons/customButton";
import { style } from "./styles";

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
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          textAlign:'center',
          maxWidth: "350px",
        }}
      >
        <Typography sx={style.title}>
          50+ Beautiful rooms inspiration
        </Typography>
        <Typography sx={style.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor
          nulla quis eros convallis, ut vestibulum ex fringilla.
        </Typography>
        <Box sx={{marginLeft:'10px'}}>
        <CustomButton  buttonText="Explore More" />

        </Box>

      </Box>
      <Box
        sx={{
          display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"},
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "50%",
        }}
      >
        <Box sx={{ width: "250px", height: "300px" }}>
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
            <Grid2
              size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                border: currentImageIndex === index ? "" : "none",
                cursor: "pointer",
                opacity: currentImageIndex === index ? 1 : 0.6,
              }}
            >
              <img
                alt={`thumbnail-${index + 1}`}
                src={img}
                style={{
                  
                  
                  padding: "5px",
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </Grid2>
          ))}
        </Box>
      </Box>
    </Grid2>
  );
};

export default Carousele;
