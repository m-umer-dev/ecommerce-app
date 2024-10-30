import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { style } from "./styles";
import contactImage from "../../assets/contactBanner.jpg";
import Badges from "../../components/badges/badges";
import { useSelector } from "react-redux";
import CartCard from "./cartCard";
import EmptyCart from "../../assets/empty-cart.svg";
import CustomButtonComponent from "../../components/customButtons/customButtonComponent";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../assets/logo.png";

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


  const navigate = useNavigate();
  const goTo = () => {
    navigate("/checkOut");
  };
  

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box  sx={{ display: "flex",flexDirection:"column" ,alignItems:'center' }}>
          <img src={logo} />
          <Box
            sx={{ display: "flex", alignItems:'center', padding:'5px' }}
          >
            <Typography
              className="txt"
              onClick={goTo}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "550",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              Home
            </Typography>

            <Stack >
              <ArrowForwardIosIcon  sx={{fontSize: '1.10rem'}}/>
            </Stack>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              Cart
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={style.mainBox}>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "65%", lg: "65%", xl: "65%" },
          }}
        >
          <Grid2 sx={style.leftBar}>
            <Typography sx={style.barTitle}>Product</Typography>
            <Typography sx={style.barTitle}>Price</Typography>
            <Typography sx={style.barTitle}>Quantity</Typography>
          </Grid2>

          {cartTotal > 0 ? (
            <Box
              sx={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedCartItems.map((product: CartValues) => (
                <Grid2
                  key={product.id}
                  sx={{
                    padding: "5px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CartCard
                    productId={product.id}
                    productImage={product.image}
                    productTitle={product.name}
                    productPrice={product.price}
                    quantity={product.quantity}
                  />
                </Grid2>
              ))}
            </Box>
          ) : (
            <Box sx={{ width: "100%", diplay: "flex", textAlign: "center" }}>
              <img src={EmptyCart} width="200px" height="200px" />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: { xl: "30%", lg: "30%", md: "100%", sm: "100%", xs: "100%" },
          }}
        >
          <Grid2 sx={style.rightBar}>
            <Typography sx={style.cartTitle}>Cart Totals</Typography>

            <Grid2 sx={style.boxSubTotal}>
              <Typography sx={style.cartSubTotal}>Total</Typography>
              <Typography sx={style.totalPrice}>Rs:{cartTotal}</Typography>
            </Grid2>

            {cartTotal > 0 ? (
              <Button sx={{marginTop:"20px"}}>
                <CustomButtonComponent
                  mode="outline"
                  border="1px solid"
                  children="CheckOut"
                  marginTop="20px"
                  onClick={goTo}
                />
              </Button>
            ) : (
              ""
            )}
          </Grid2>
        </Box>
      </Box>
      <Badges />
    </>
  );
};

export default Cart;
