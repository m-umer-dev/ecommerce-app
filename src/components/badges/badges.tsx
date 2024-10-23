import { style } from "./styles";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import shippingIcon from "../../assets/badgesImages/shipping.png";
import warrantyIcon from "../../assets/badgesImages/guarantee.png";
import supportIcon from "../../assets/badgesImages/Vector.png";
import highQualityIcon from "../../assets/badgesImages/highQuality.png";

const Badges = () => {
  return (
    <div>
      <Box
        sx={style.mainBox}
       
      >
        <Box
       
          sx={style.contentBox}
       
        >
          <Stack sx={style.imag}>
          <img src={highQualityIcon} />

          </Stack>
          <Box>
            <Typography sx={style.title}>Quality</Typography>
            <Typography sx={style.subTitle}>
              crafted top materials
            </Typography>
          </Box>
        </Box>

        <Box
          sx={style.contentBox}
         
        >
          <Stack sx={style.imag}>
          <img src={warrantyIcon} />
          </Stack>
          <Box>
            <Typography sx={style.title}>Warranty</Typography>
            <Typography sx={style.subTitle}>Over 2 years</Typography>
          </Box>
        </Box>

        
        <Box
          sx={style.contentBox}
         
        >
          <Stack sx={style.imag}>
          <img src={shippingIcon} />
          </Stack>
          <Box>
            <Typography sx={style.title}>Free shipping</Typography>
            <Typography sx={style.subTitle}>Order over 150 $</Typography>
          </Box>
        </Box>

        <Grid2
          sx={style.contentBox}
          
        >
          <Stack sx={style.imag}>
          <img src={supportIcon}  />

          </Stack>
          <Box>
            <Typography sx={style.title}>24 / 7 Support</Typography>
            <Typography sx={style.subTitle}>Daddicated Support</Typography>
          </Box>
        </Grid2>
      </Box>
    </div>
  );
};

export default Badges;
