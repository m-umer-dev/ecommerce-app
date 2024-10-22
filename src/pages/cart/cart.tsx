import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { style } from './styles';
import contactImage from "../../assets/contactBanner.jpg";
import Badges from '../../components/badges/badges';
import { useSelector } from "react-redux";
import CartCard from './cartCard';
import CustomButton from '../../components/customButtons/customButton';

interface CartValues {
  id: number; 
  image?: string;
  name: string; 
  price: number; 
  quantity: number; 
}

const Cart = () => {
  const selectedCartItems = useSelector((state: any) => state.cart.product);
  const cartTotal = useSelector((state: any) => state.cart.total);

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
          {/* <Typography sx={style.barTitle}>SubTotal</Typography> */}
        </Grid2>

        <Grid2 sx={style.rightBar}>
          <Typography sx={style.cartTitle}>Cart Totals</Typography>
          <Grid2 sx={style.boxSubTotal}>
            {/* <Typography sx={style.cartSubTotal}>Subtotal</Typography>
            <Typography sx={style.subTotalPrice}>Rs: {cartTotal}</Typography> */}
          </Grid2>
          <Grid2 sx={style.boxSubTotal}>
            <Typography sx={style.cartSubTotal}>Total</Typography>
            <Typography sx={style.totalPrice}>Rs:{cartTotal}</Typography>
            
          </Grid2>
          <Button sx={style.chekOutbutton} variant="outlined">CheckOut</Button>
        </Grid2>
      </Box>
{cartTotal > 0 ?
<Box sx={{display:"flex",flexDirection:'column',padding: '10px'}}>      
      {selectedCartItems.map((product: CartValues) => (
        <Box key={product.id}  sx={{display:'flex',marginLeft:'90px',padding: '5px'}}> 
       
          <CartCard
           
            productId={product.id}
            productImage={product.image}
            productTitle={product.name} 
            productPrice={product.price} 
            quantity={product.quantity} 
          />
        </Box>
      ))}
</Box> : <Typography sx={{display:'flex',justifyContent:"center",fontSize:"26px",}}>Cart is Empty</Typography>}

      <Badges />
    </>
  );
};

export default Cart;
