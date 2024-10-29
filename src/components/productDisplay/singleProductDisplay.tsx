import { Box, Divider, Grid2, Input, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { style } from "./styles";
import mainImg from "../../assets/products/Asgaard sofa 3.png";
import featureImg1 from "../../assets/products/Mask group.png";
import featureImg2 from "../../assets/products/Group 98.png";
import featureImg3 from "../../assets/products/Group 97.png";
import featureImg4 from "../../assets/products/Group 96.png";
import Rating from "@mui/material/Rating";
import React from "react";
import CustomButtonComponent from "../customButtons/customButtonComponent";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedin.png";
import disImg from "../../assets/products/Group 107.png";

export const SingleProductDisplay = () => {
  return (
    <>
      <Box sx={style.topBar}>
        <Typography sx={style.navTitle}>Home</Typography>
        <Stack>
          <ArrowForwardIosIcon sx={{ fontSize: "1.10rem" }} />
        </Stack>
        <Typography sx={style.navTitle}>Shop</Typography>
      </Box>

      <Box sx={style.mainBox}>
        <Grid2 sx={style.featureBox}>
          <Grid2 sx={style.featureImages}>
            <Box sx={style.featureImg}>
              <img src={featureImg1} alt="" />
            </Box>
          </Grid2>

          <Grid2 sx={style.featureImages}>
            <Box sx={style.featureImg}>
              <img src={featureImg2} alt="" />
            </Box>
          </Grid2>

          <Grid2 sx={style.featureImages}>
            <Box sx={style.featureImg}>
              <img src={featureImg3} alt="" />
            </Box>
          </Grid2>

          <Grid2 sx={style.featureImages}>
            <Box sx={style.featureImg}>
              <img src={featureImg4} alt="" />
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 sx={style.mainImageBox}>
          <Box sx={style.mainImg}>
            <img src={mainImg} alt="" height={400} />
          </Box>
        </Grid2>

        {/* product Detail */}
        <Box sx={style.productDetail}>
          <Typography sx={style.productTitle}>Asgaard sofa</Typography>
          <Typography sx={style.productPrice}>Rs. 250,000.00</Typography>

          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
          <Typography sx={style.productShortDetail}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </Typography>

          <Box>
            <Typography sx={style.sizeTitle}>Size </Typography>

            <Box sx={style.sizeButton}>
              <CustomButtonComponent
                mode="outline"
                children="L"
                color="black"
                background="#F9F1E7"
              />

              <CustomButtonComponent
                mode="outline"
                children="XL"
                color="black"
                background="#F9F1E7"
              />

              <CustomButtonComponent
                mode="outline"
                children="XS"
                color="black"
                background="#F9F1E7"
              />
            </Box>
          </Box>

          <Box>
            <Typography sx={style.colorTitle}>Color </Typography>

            <Box sx={style.colorButton}>
              <Box
                sx={{
                  color: "black",
                  borderRadius: "100%",
                  width: "35px",
                  height: "35px",
                  background: "#816DFA",
                }}
              ></Box>

              <Box
                sx={{
                  color: "black",
                  borderRadius: "100%",
                  width: "35px",
                  height: "35px",
                  background: "#000000",
                }}
              ></Box>

              <Box
                sx={{
                  color: "black",
                  borderRadius: "100%",
                  width: "35px",
                  height: "35px",
                  background: "#B88E2F",
                }}
              ></Box>
            </Box>
          </Box>

          <Box sx={style.quantityBox}>
            <Typography sx={style.quntityBtn}>-</Typography>
            <Input sx={style.quantityInput} />
            <Typography sx={style.quntityBtn}>+</Typography>
          </Box>

          <Divider variant="middle" sx={{ marginTop: "50px" }} />
          <Box sx={style.socialIcons}>
            <Box
              sx={{
                width: "25%",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid2 container spacing={2} rowSpacing={3} sx={style.leftSide}>
                <Box>
                  <Typography sx={style.StockDetail}>SKU</Typography>
                </Box>
                <Box>
                  <Typography sx={style.StockDetail}>Category</Typography>
                </Box>
                <Box>
                  <Typography sx={style.StockDetail}>Tags</Typography>
                </Box>

                <Box>
                  <Typography sx={style.StockDetail}>Share</Typography>
                </Box>
              </Grid2>
            </Box>

            <Box
              sx={{ width: "30%", display: "flex", flexDirection: "column" }}
            >
              <Grid2 container spacing={2} rowSpacing={3} sx={style.leftSide}>
                <Box>
                  <Typography sx={style.StockDetail}>SKU</Typography>
                </Box>
                <Box>
                  <Typography sx={style.StockDetail}>Category</Typography>
                </Box>
                <Box>
                  <Typography sx={style.StockDetail}>Tags</Typography>
                </Box>

                <Grid2 container spacing={2}>
                  <img src={facebookIcon} alt="" />
                  <img src={twitterIcon} alt="" />

                  <img src={linkedinIcon} alt="" />
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          // width:{xs:"100%",sm:"100%",md:"50%",lg:'40%',xl:"100%"},
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Grid2 container spacing={3}>
          <Typography sx={style.descriptionTitleActive}>Description</Typography>
          <Typography sx={style.descriptionTitle}>
            Additional Information
          </Typography>
          <Typography sx={style.descriptionTitle}>Reviews [5]</Typography>
        </Grid2>

        <Typography sx={style.productFullDetail}>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </Typography>

        <Grid2
          container
          spacing={3}
          sx={{
            width: "100%",
            marginTop: "30px",
            display: "flex",
            // flexDirection:{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"},

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%", lg: "50%", xl: "40%" },
              maxWidth: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              padding: "10px",
            }}
          >
            <img
              src={disImg}
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%", lg: "50%", xl: "40%" },
              maxWidth: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              padding: "10px",
            }}
          >
            <img
              src={disImg}
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid2>
      </Box>
    </>
  );
};
