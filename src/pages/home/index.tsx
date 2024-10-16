import { Box } from "@mui/material";
import { style } from "./styles";
import banner from "../../assets/banner.jpg";
import Footer from "../../components/footer";
import Carousele from "../../components/carousel/carousel";
import Categories from "../../components/category/categoryShow";
import { ProductList } from "../../components/productslist/productList";
import ImageGallery from "../../components/imageGallery/imagesGallery";

const Home = () => {
  return (
    <>
      <Box component="img" src={banner} alt="logo" sx={style.box}/>
      
      <Categories/>
      <ProductList/>
      <Carousele/>
      <ImageGallery/>
      {/* <Footer /> */}
    
    </>
  );
};

export default Home;
