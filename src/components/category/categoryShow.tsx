import { Box, Card, CardMedia, Grid2, Typography } from "@mui/material";
import React from "react";
import { style } from "./styles";
import Dining from "../../assets/Mask Group.png";
import Living from "../../assets/Image-living room.png";
import BedRoom from "../../assets/bed room.png";
interface categoryValues {
  sm: string;
}
const Categories = () => {
  return (
    <div>
      <Grid2 container spacing={0.5} sx={style.mainBox}>
        <Box sx={style.mainBox}>
          <Typography sx={style.title}>Browse The Range</Typography>
          <Typography sx={style.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>

        <Box sx={style.categoryBox} >
          <Grid2
            container
            spacing={1} sx={{display:'flex',justifyContent: 'center',
                alignContent: "center",
                 alignItems: "center",}}
           
          >
            <Card
              sx={{
                width: 230,
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                textAlign: "center",
                boxShadow: 0,
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
                image={Dining}
                title="green iguana"
              />
              <Typography sx={style.categoryTitle}>Dining</Typography>
            </Card>

            <Card
              sx={{
                width: 230,
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                textAlign: "center",
                boxShadow: 0,
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
                image={Living}
                title="green iguana"
              />
              <Typography sx={style.categoryTitle}>Living</Typography>
            </Card>
            <Card
              sx={{
                width: 230,
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                textAlign: "center",
                boxShadow: 0,
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
                image={BedRoom}
                title="green iguana"
              />
              <Typography sx={style.categoryTitle}>Bed Room</Typography>
            </Card>
          </Grid2>
        </Box>
      </Grid2>
    </div>
  );
};

export default Categories;
