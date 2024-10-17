import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import {style} from './styles'
import contactImage from "../../assets/contactBanner.jpg";
import Badges from '../../components/badges/badges';


const Cart = () => {
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
        <Typography sx={style.subTotalPrice} >Rs:250,00</Typography>
        </Grid2>
        <Grid2 sx={style.boxSubTotal}>
        <Typography sx={style.cartSubTotal}>Total</Typography>
        <Typography sx={style.totalPrice} >Rs:250,00</Typography>
        </Grid2>



            

        </Grid2>
    </Box>
    <Badges/>
    </>
   
  )
}

export default Cart
