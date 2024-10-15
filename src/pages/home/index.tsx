import { Box } from "@mui/material";
import Header from "../../components/header/index";
import { style } from "./styles";
import banner from "../../assets/banner.jpg";
import Shop from "../shop/shop";
import Footer from "../../components/footer";
import Carousele from "../../components/carousel/carousel";

const Home = () => {
  return (
    <>
      <Header />
      
      <Box component="img" src={banner} alt="logo" sx={style.box}/>
      <Carousele/>
      <Shop/>
      <Footer />
    
    </>
  );
};

export default Home;
