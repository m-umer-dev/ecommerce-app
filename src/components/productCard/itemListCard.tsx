import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { style } from "../productCard/styles";
import { Box, Button, Grid2, Stack} from "@mui/material";
import shareicon from "../../assets/shareicon.png";
import compareicon from "../../assets/compareicon.png";
import hearticon from "../../assets/hearticon.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductCardValues {
  productId: number;
  productImage?: string;
  productTitle: string;
  productFeature: string;
  productPrice: string;
  productOldPrice: string;
}

const ItemListCard = ({
  productId,
  productImage,
  productTitle,
  productFeature,
  productPrice,
  productOldPrice,
}: ProductCardValues) => {

 
  const dispatch = useDispatch()


  const handleAddToCart = () => {
    const newProduct = {
      id: productId,
      name: productTitle,
      description: productFeature,
      price: parseFloat(productPrice),
      discountPrice: parseFloat(productOldPrice),
      image: productImage || "",
      discount: "New",
      quantity: 1,
    };

    console.log("Dispatching add to cart", newProduct);
    dispatch(addToCart(newProduct));

    toast.success("Added !", {
      position: "top-right",
      className: "foo-bar",
    });
  };

  return (
    <Card
      sx={{
        width: "305px",
        height: "380px",
        background: "#F4F5F7",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 1,
        },
        "&:hover .centerButton": {
          opacity: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        alt={productTitle}
        height="240px"
        image={productImage}
      />
      <ToastContainer />
      <Box sx={style.productDetail}>
        <CardContent>
          <Typography sx={style.productTitle}>{productTitle}</Typography>
          <Typography sx={style.productFeature}>{productFeature}</Typography>
        </CardContent>

        <CardContent sx={style.priceContent}>
          <Typography sx={style.productPrice}>Rs {productPrice}</Typography>
          <Typography sx={style.productOldPrice}>
            Rs {productOldPrice}
          </Typography>
        </CardContent>
      </Box>

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="centerButton"
          variant="contained"
          sx={{
            opacity: 0,
            transition: "opacity 0.3s ease",
            backgroundColor: "#FFFFFF",
            color: "#B88E2F",
            width: "70%",
            fontWeight: "600",
            fontSize: "15px",
            textAlign: "center",
            borderRadius: "0px",
            mb: 2,
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "80%",
          }}
        >
          <Grid2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ marginRight: "0px" }}>
                <img src={shareicon} alt="Share" />
              </Stack>
              <Typography sx={style.iconText}>Share</Typography>
            </Box>
          </Grid2>

          <Grid2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ marginRight: "3px" }}>
                <img src={compareicon} alt="Compare" />
              </Stack>
              <Typography sx={style.iconText}>Compare</Typography>
            </Box>
          </Grid2>

          <Grid2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ marginRight: "3px" }}>
                <img src={hearticon} alt="Like" />
              </Stack>
              <Typography sx={style.iconText}>Like</Typography>
            </Box>
          </Grid2>
        </Box>
      </Box>
    </Card>
  );
};

export default ItemListCard;
