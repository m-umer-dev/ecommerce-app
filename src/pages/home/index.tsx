import { Box } from "@mui/material";
import banner from "../../assets/banner.jpg";
import Carousele from "../../components/carousel/carousel";
import Categories from "../../components/category/categoryShow";
import { ProductList } from "../../components/productslist/productList";
import ImageGallery from "../../components/imageGallery/imagesGallery";
import Cart from "../cart/cart";
// import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <>
    
    <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "66px",
          height: "400px",
        }}
      ></Box>
      {/* <Toaster/> */}
      <Categories/>
      <ProductList/>
      <Carousele/>
      <ImageGallery/>
    
    </>
  );
};

export default Home;
