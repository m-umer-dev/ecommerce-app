import React from "react";
import { style } from "./styles";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import HighQualityIcon from "@mui/icons-material/EmojiEventsOutlined";
import WarrantyIcon from '@mui/icons-material/ShieldOutlined';
import ShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportIcon from '@mui/icons-material/SupportAgentOutlined';
const Badges = () => {
  return (
    <div>
      <Grid2 sx={style.mainBox }
          container
          spacing={0.5}
          rowSpacing={2}
          columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
          >
        <Grid2
        maxWidth={350}
        sx={style.contentBox}
        container
        spacing={0.5}
        rowSpacing={2}
        columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          <Stack>
            <HighQualityIcon sx={style.iconDetail} />
          </Stack>
          <Box>
          <Typography sx={style.title}>High Quality</Typography>
          <Typography sx={style.subTitle}>crafted from top materials</Typography>

          </Box>

          
        </Grid2>

        <Grid2
        maxWidth={350}
        sx={style.contentBox}
        container
        spacing={0.5}
        rowSpacing={2}
        columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          <Stack>
            <WarrantyIcon sx={style.iconDetail} />
          </Stack>
          <Box>
          <Typography sx={style.title}>Warranty Protection</Typography>
          <Typography sx={style.subTitle}>Over 2 years</Typography>

          </Box>

          
        </Grid2>

        <Grid2
        maxWidth={350}
        sx={style.contentBox}
        container
        spacing={0.5}
        rowSpacing={2}
        columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          <Stack>
            <ShippingIcon sx={style.iconDetail} />
          </Stack>
          <Box>
          <Typography sx={style.title}>Free shipping</Typography>
          <Typography sx={style.subTitle}>Order over 150 $</Typography>

          </Box>

          
        </Grid2>



        <Grid2
        maxWidth={350}
        sx={style.contentBox}
        container
        spacing={0.5}
        rowSpacing={2}
        columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          <Stack>
            <SupportIcon sx={style.iconDetail} />
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
