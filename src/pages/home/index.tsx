import { Box } from "@mui/material";
import banner from "../../assets/banner.png";
import Carousele from "../../components/carousel/carousel";
import Categories from "../../components/category/categoryShow";
import { ProductList } from "../../components/productslist/productList";
import ImageGallery from "../../components/imageGallery/imagesGallery";
import BannerText from "../../components/banner/bannerText";
import { SingleProductDisplay } from "../../components/productDisplay/singleProductDisplay";

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
          height: "500px",
          width: '100%',
          display:'flex',
          padding: '20px',
          alignItems:'center',
          justifyContent: 'flex-end',
          
        }}
     
      >
         <BannerText/> 

       
      </Box>
      {/* <SingleProductDisplay/> */}

      <Categories/>
      <ProductList/>
      <Carousele/>
      <ImageGallery/>
    
    </>
  );
};

export default Home;
