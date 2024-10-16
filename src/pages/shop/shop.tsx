import React from "react";
import ItemCard from "../../components/productCard/itemCard";
import image1 from "../../assets/products/image 1.png";
import { useSelector } from "react-redux";
import { Box, Grid2 } from "@mui/material";
import shopBanner from "../../assets/shopBanner.jpg";
import { style } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Badges from "../../components/badges/badges";

const Shop = () => {
  const allProducts = useSelector((state: any) => state.product.product);

  return (
    <div>
        
      {/* <Header /> */}
      {/* <Box component="img" src={shopBanner} alt="logo" sx={style.box}></Box> */}
      {/* display: 'flex', justifyContent: 'center', alignItems:'center',padding: '40px' */}
      <Box sx={{marginTop:'50px', padding: "40px" }}>
        {/*  rowSpacing={2} columnSpacing={{xl:1 , lg: 0.5, md: 4, sm: 6, xs: 12  }}  */}
        <Grid2
          container
          spacing={0.5}
          rowSpacing={2}
          columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          {allProducts.map((prodct: any) => (
            <Grid2
              container
              spacing={0.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              size={{ xl: 2, lg: 3, md: 4, sm: 3, xs: 12 }}
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

      <Badges/>
      {/* <Footer/> */}
    </div>
  );
};

export default Shop;
