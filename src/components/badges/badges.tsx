import React from "react";
import { style } from "./styles";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import HighQualityIcon from "@mui/icons-material/EmojiEventsOutlined";
import WarrantyIcon from "@mui/icons-material/ShieldOutlined";
import ShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportIcon from "@mui/icons-material/SupportAgentOutlined";
import shippingIcon from "../../assets/badgesImages/shipping.png";
import warrantyIcon from "../../assets/badgesImages/guarantee.png";

import supportIcon from "../../assets/badgesImages/Vector.png";
import highQualityIcon from "../../assets/badgesImages/highQuality.png";

const Badges = () => {
  return (
    <div>
      <Grid2
        sx={style.mainBox}
        container
        spacing={0.5}
        rowSpacing={5}
        // columnSpacing={{ xl: 0, lg: 0, md: 4, sm: 4, xs: 4 }}
      >
        <Grid2
          width={300}
          sx={style.contentBox}
          container
          spacing={0.5}
          rowSpacing={2}
          // columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 2, xs: 2 }}
        >
          <Stack>
          <img src={highQualityIcon} />

          </Stack>
          <Box>
            <Typography sx={style.title}>Quality</Typography>
            <Typography sx={style.subTitle}>
              crafted top materials
            </Typography>
          </Box>
        </Grid2>

        <Grid2
          width={300}
          sx={style.contentBox}
          container
          spacing={0.5}
          rowSpacing={2}
          // columnSpacing={{ xl: 0.5, lg: 0.5, md: 2, sm: 2, xs: 2 }}
        >
          <Stack>
          <img src={warrantyIcon} />
          </Stack>
          <Box>
            <Typography sx={style.title}>Warranty</Typography>
            <Typography sx={style.subTitle}>Over 2 years</Typography>
          </Box>
        </Grid2>

        
        <Grid2
          width={300}
          sx={style.contentBox}
          container
          spacing={0.5}
          rowSpacing={2}
          // columnSpacing={{ xl: 0.5, lg: 0.5, md: 2, sm: 2, xs: 2 }}
        >
          <Stack>
          {/* <WarrantyIcon sx={style.iconDetail} /> */}
          <img src={shippingIcon} />
          </Stack>
          <Box>
            <Typography sx={style.title}>Free shipping</Typography>
            <Typography sx={style.subTitle}>Order over 150 $</Typography>
          </Box>
        </Grid2>

        <Grid2
          width={300}
          sx={style.contentBox}
          container
          spacing={0.5}
          rowSpacing={2}
          // columnSpacing={{ xl: 0.5, lg: 0.5, md: 2, sm: 2, xs: 2 }}
        >
          <Stack>
          {/* <SupportIcon sx={style.iconDetail} /> */}
          <img src={supportIcon} />

          </Stack>
          <Box>
            <Typography sx={style.title}>24 / 7 Support</Typography>
            <Typography sx={style.subTitle}>Daddicated Support</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Badges;
