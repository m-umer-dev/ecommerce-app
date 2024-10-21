import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { style } from "../productCard/styles";
import { Box } from "@mui/material";
const CartCard = () => {
  return (
    //#F4F5F7
    <Card sx={{ width: '555px', height:"380px", background: "#F4F5F7"}}>
      <CardMedia
        component="img"
        alt="Stylish cafe chair"
        height="240px"
        width="100%"
        image={productImage}
      />

      <Box sx={style.productDetail}>
        <CardContent>
          <Typography sx={style.productTitle}>{productTitle}</Typography>
          <Typography sx={style.productFeature}>{productFeature}</Typography>
        </CardContent>

        <CardContent sx={style.priceContent}>
          <Typography sx={style.productPrice}> {productPrice}</Typography>
          <Typography sx={style.productOldPrice}>{productOldPrice}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default CartCard
