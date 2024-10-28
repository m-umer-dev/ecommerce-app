import React, { useState } from "react";
import { style } from "./styles";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ShowMore from "../customButtons/showMore";
import ItemListCard from "../productCard/itemListCard";


export const ProductList = () => {
 
  const [layout, setLayout] = useState("grid");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const allProducts = useSelector((state: any) => state.product.product);
  const showMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 8);
   

  };
  
  return (
    <div>
      <Box sx={style.mainContainer}>
        <Typography sx={style.title}>Our Products</Typography>
        <Box sx={{marginBottom: "20px"}}>
          <Box sx={{ marginTop: "10px", padding: "30px"  }}>
            <Grid2
          container
          spacing={2}
          rowSpacing={2}
          columnSpacing={{ xl: 1, lg: 2.5, md: 4, sm: 4, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // background:'red',
           
          }}
        >
              {allProducts.slice(0, visibleProducts).map((product: any) => (
                <Grid2
                key={product.id}
                
                size={{
                  xl:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 3
                      : 3,
                  lg:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 2.5
                      : 2.5,
                  md:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 4
                      : 4,
                  sm:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 4
                      : 4,
                  xs: layout === "list" ? 12 : 12,
                }}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ItemListCard
                  productId={product.id}
                  productImage={product.image}
                  productTitle={product.name}
                  productFeature={product.description}
                  productPrice={product.price}
                  productOldPrice={product.discountPrice}
                />
              </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
        {visibleProducts < allProducts.length && (
          <Button onClick={showMoreProducts} >
            <ShowMore  buttonText="Show More" />
          </Button>
        ) 
         }

      </Box>
    </div>
  );
};
