import React, { useState } from "react";
import { style } from "./styles";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ItemCard from "../productCard/itemCard";
import image1 from "../../assets/products/image1.png";
import ShowMore from "../customButtons/showMore";
import { productSlice } from "../../redux/slices/productsSlice";
import ItemListCard from "../productCard/itemListCard";


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
        <Box sx={{marginBottom: "30px"}}>
          <Box sx={{ marginTop: "15px", padding: "50px"  }}>
            <Grid2
              container
              // spacing={0}
              rowSpacing={2}
              columnSpacing={{ xl: 3, lg: 2, md: 4, sm: 6, xs: 12 }}

              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // background: 'green',
              }}
            >
              {allProducts.slice(0, visibleProducts).map((prodct: any) => (
                <Grid2
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // background: 'green',
                  }}
                  size={{ xl: 2, lg: 2.5, md: 4, sm: 4, xs: 12 }}
                  key={prodct.id}
                >
                  {/* <ItemCard
                    productId={prodct.id}
                    productImage={prodct.image}
                    productTitle={prodct.name}
                    productFeature={prodct.description}
                    productPrice={prodct.price}
                    productOldPrice={prodct.discountPrice} */}
                    {/* //    productDiscount={prodct.discount} */}
                 {/* /> */}
                   <ItemListCard
                   
                  productId={prodct.id}
                  productImage={prodct.image}
                  productTitle={prodct.name}
                  productFeature={prodct.description}
                  productPrice={prodct.price}
                  productOldPrice={prodct.discountPrice}
                />
                  <Grid2 />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
        {visibleProducts < allProducts.length && (
          <Button onClick={showMoreProducts} sx={{width:'70%'}}>
            <ShowMore buttonText="Show More" />
          </Button>
        ) 
         }

      </Box>
    </div>
  );
};
