import React from "react";
import { style } from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ProductView = () => {

  const allproduct = useSelector((state: any) => state.product.product);
  const { Itemid } = useParams<{ Itemid: string }>();
  console.log({ Itemid });

  const productId = Number(Itemid);
  const selectedProduct = allproduct.find((product: any) => product.id === productId);
  return <div>
     {selectedProduct ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            width: "100%",
          }}
        >
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {selectedProduct.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {`Author: ${selectedProduct.Author}`}
              </Typography>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: "30%", marginBottom: 20 }}
              />
              <Typography variant="body1">
                {selectedProduct.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Typography variant="h6" color="error">
          Page item is not present
        </Typography>
      )}
  </div>;
};

export default ProductView;
