import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "../../assets/products/image 1.png";
import { style } from "../productCard/styles";
import { Box } from "@mui/material";

interface productCardValues {
  productId: number;
  productImage?: string;
  productTitle: string;
  productFeature: string;
  productPrice: string;
  productOldPrice: string;
}
const ItemCard = ({
  productImage,
  productTitle,
  productFeature,
  productPrice,
  productOldPrice,
}: productCardValues) => {
  return (
    <Card sx={{ maxWidth: '100%', background: "#F4F5F7"}}>
      <CardMedia
        component="img"
        alt="Stylish cafe chair"
        height="250"
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
  );
};

export default ItemCard;
