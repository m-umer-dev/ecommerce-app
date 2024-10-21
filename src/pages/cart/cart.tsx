import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import {style} from './styles'
import contactImage from "../../assets/contactBanner.jpg";
import Badges from '../../components/badges/badges';

import { useDispatch, useSelector } from "react-redux";
// import  RiDeleteBin6Line  from "../../assets/shareicon.png";
interface CartValues {
    productId: number;
    productImage?: string;
    productTitle: string;
    productFeature: string;
    productPrice: string;
    productOldPrice: string;
  }
  
const Cart = ({productId,productImage,productTitle,productFeature,productPrice,productOldPrice}:CartValues) => {

    const selectedProduct = useSelector((state: any) => state.cart);

//   const { cart } = useSelector((state: any) => state.cart);
//   const dispatch = useDispatch();

  return (
    <>
  

     <Box
          sx={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop: "66px",
            height: "400px",
          }}
        ></Box>

<Box sx={style.mainBox}>
        
        <Grid2 sx={style.leftBar}>
            <Typography sx={style.barTitle}>Product</Typography>
            <Typography sx={style.barTitle}>Price</Typography>
            <Typography sx={style.barTitle}>Quantity</Typography>
            <Typography sx={style.barTitle}>SubTotal</Typography>

            
        </Grid2>

        <Grid2 sx={style.rightBar}>
        <Typography sx={style.cartTitle}>Cart Totals</Typography>

        <Grid2 sx={style.boxSubTotal}>
        <Typography sx={style.cartSubTotal}>Subtotal</Typography>
        <Typography sx={style.subTotalPrice} >Rs</Typography>
        </Grid2>
        <Grid2 sx={style.boxSubTotal}>
        <Typography sx={style.cartSubTotal}>Total</Typography>
        <Typography sx={style.totalPrice} >Rs:{selectedProduct.productPrice}</Typography>
        </Grid2>



            

        </Grid2>
    </Box>
    <Badges/>
    </>
   
  )
}

export default Cart
