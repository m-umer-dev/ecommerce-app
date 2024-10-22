import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { style } from "./styles";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, deleteFromCart } from "../../redux/slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartCardValues {
  productId: number;
  productImage?: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
}

const CartCard = ({
  productImage,
  productTitle,
  productPrice,
  quantity,
  productId,
}: CartCardValues) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state: any) => state.cart.total);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(0, Number(e.target.value));
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));

    toast.success("Deleted !", {
        position: "top-right",
        className: "foo-bar",
      });
  
      toast.warn("Warning Notification !", {
        position: "bottom-left",
      });
  };

  const handleDelete = () => {
    
    dispatch(deleteFromCart(productId))

   
    toast.error("Deleted !", {
        position: "top-right",
        className: "foo-bar",
      });

   
  
     
   
  };

  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <Card
        sx={{
          width: "20%",
          height: "100px",
          background: "#F4F5F7",
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          alt="Product Image"
          height="100px"
          width="105px"
          image={productImage}
        />
      </Card>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          width: "100%",
        }}
      >
        <Typography sx={style.productTitle}>{productTitle}</Typography>
        <Typography sx={style.productPrice}>Rs {productPrice}</Typography>

        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          sx={{ width: "60px", marginTop: "10px", textAlign: "center" }}
        />

        {/* <Button
          onClick={handleDelete}
          sx={{ marginTop: "10px", marginLeft: "20px", color: "#B88E2F" }}
        > */}
          <DeleteIcon  onClick={handleDelete}  sx={{ marginTop: "10px", marginLeft: "20px", color: "#B88E2F" }}/>
        {/* </Button> */}
      </CardContent>
    </Box>
  );
};

export default CartCard;
