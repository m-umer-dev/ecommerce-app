import {
 
  Button,
  Divider,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { style } from "./styles";

const Footer = () => {
  return (
    <>
     <Divider variant="fullWidth"  />
    <Grid2
      container
      spacing={10}
      sx={style.mainContainer}
      size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}
    >
      <Grid2 sx={style.column1}>
        <Typography style={style.logo}>Funiro.</Typography>
        <Typography variant="body1" gutterBottom style={style.address}>
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </Typography>
      </Grid2>

      <Grid2 container spacing={0.5} sx={style.column2}>
        <Typography sx={style.linkTitle}>Links</Typography>

        <Link sx={style.linkList} href="#">
          Home
        </Link>
        <Link sx={style.linkList} href="#">
          Shop
        </Link>
        <Link sx={style.linkList} href="#">
          About
        </Link>
        <Link sx={style.linkList} href="#">
          Contact
        </Link>
      </Grid2>

      <Grid2 container spacing={0.5} sx={style.column3}>
        <Typography sx={style.linkTitle}>Links</Typography>

        <Link sx={style.linkList} href="#">
          Payment Options
        </Link>
        <Link sx={style.linkList} href="#">
          Returns
        </Link>
        <Link sx={style.linkList} href="#">
          Privacy Policies
        </Link>
      </Grid2>

      <Grid2 sx={style.column4}>
        <Typography sx={style.linkTitle}>Newsletter</Typography>
        <Grid2 container spacing={0.5} sx={style.subcolumn4}>
          <TextField
            sx={style.email}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <Button sx={style.buttonSubscribe}>SUBSCRIBE</Button>
        </Grid2>
      </Grid2>
      <Divider variant="middle" sx={style.dividerLine} />
      <Grid2>
        <Typography sx={style.copyrights}>
          2023 furino. All rights reverved
        </Typography>
      </Grid2>
    </Grid2>
    </>
   
  );
};

export default Footer;
