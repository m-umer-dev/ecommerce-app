import React, { useState } from "react";
import { style } from "./styles";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ItemCard from "../productCard/itemCard";
import image1 from "../../assets/products/image1.png";
import ShowMore from "../customButtons/showMore";


export const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const allProducts = useSelector((state: any) => state.product.product);
  const showMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 8);
  };

  return (
    <div>
      <Box sx={style.mainContainer}>
        <Typography sx={style.title}>Our Products</Typography>
        <Box>
          <Box sx={{ marginTop: "0px", padding: "50px", display: "flex" }}>
            <Grid2
              container
              spacing={1}
              rowSpacing={2}
              columnSpacing={{ xl: 0.5, lg: 1, md: 4, sm: 6, xs: 12 }}
            >
              {allProducts.slice(0, visibleProducts).map((prodct: any) => (
                <Grid2
                  container
                  spacing={0.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  size={{ xl: 2, lg: 3, md: 4, sm: 4, xs: 12 }}
                  key={prodct.id}
                >
                  <ItemCard
                    productId={prodct.id}
                    productImage={image1}
                    productTitle={prodct.name}
                    productFeature={prodct.description}
                    productPrice={prodct.price}
                    productOldPrice={prodct.discountPrice}
                    //    productDiscount={prodct.discount}
                  />
                  <Grid2 />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
        {visibleProducts < allProducts.length && (
          <Button onClick={showMoreProducts}>
            <ShowMore buttonText="Show More" />
          </Button>
        ) 
         }

      </Box>
    </div>
  );
};
