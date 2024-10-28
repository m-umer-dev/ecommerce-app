import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { style } from "./styles";
import {
  Box,
  Button,
  Grid2,
  InputLabel,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import contactImage from "../../assets/contactBanner.jpg";
import Badges from "../../components/badges/badges";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import ItemListCard from "../../components/productCard/itemListCard";
import ItemCard from "../../components/productCard/itemCard";
import TwoColumnCard from "../../components/productCard/twoColumnCard";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../assets/logo.png";

const Shop = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };

  const allProducts = useSelector((state: any) => state.product.product);

  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isAscending, setIsAscending] = useState("");
  const [visibleProduct, setVisibleProduct] = useState(8);
  const [layout, setLayout] = useState("grid");
  console.log({ layout });

  const showMoreProduct = (event: SelectChangeEvent) => {
    const numberToShow = parseInt(event.target.value, 10);
    setVisibleProduct(numberToShow);
  };

  useEffect(() => {
    const filtered = allProducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchItem, allProducts]);

  const handleChange = (event: SelectChangeEvent) => {
    const order = event.target.value as string;

    const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
      if (order === "Ascending") {
        return a.name.localeCompare(b.name);
      } else if (order === "Descending") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    setIsAscending(order);
    setFilteredProducts(sortedProducts);
  };

  const handleLayoutChange = (layoutType: string) => {
    setLayout(layoutType);
  };

  return (
    <div>
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
              Home{" "}
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
              Shop
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "#F9F1E7",
          marginTop: "0px",
          padding: { xs: "20px", sm: "30px", md: "40px", lg: "18px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          sx={{
            width: { xs: "50%", sm: "50%", md: "20%", lg: "13%" },
          }}
          id="outlined-search"
          placeholder="Search Product"
          type="search"
          fullWidth
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <FormControl
          sx={{
            width: { xs: "70%", sm: "50%", md: "15%", lg: "13%" },
            marginTop: { xs: "16px", sm: "0px" },
          }}
        >
          <InputLabel sx={style.showProduct} id="demo-simple-select-label">
            Sort By
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isAscending}
            label="Sort By"
            onChange={handleChange}
          >
            <MenuItem sx={style.showProduct} value="Ascending">
              Ascending
            </MenuItem>
            <MenuItem sx={style.showProduct} value="Descending">
              Descending
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: { xs: "70%", sm: "50%", md: "15%", lg: "13%" },
            marginTop: { xs: "16px", sm: "0px" },
          }}
        >
          <InputLabel sx={style.showProduct} id="demo-simple-select-label">
            Show :{" "}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={visibleProduct.toString()}
            label="Show"
            onChange={showMoreProduct}
          >
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => handleLayoutChange("grid")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "12px",

              cursor: "pointer",
              margin: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <ViewModuleIcon />
          </Box>

          <Box
            onClick={() => handleLayoutChange("list")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "12px",
              cursor: "pointer",
              margin: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <ViewListIcon />
          </Box>

          <Box
            onClick={() => handleLayoutChange("two-column")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "12px",
              cursor: "pointer",
              margin: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <GridViewIcon />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: { xs: "16px", sm: "0px", lg: "0px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={style.showProduct}>
            Showing 1 - {visibleProduct} of {allProducts.length}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: "50px", padding: "40px" }}>
        <Grid2
          container
          spacing={2}
          rowSpacing={2}
          columnSpacing={{ xl: 1, lg: 2.5, md: 4, sm: 4, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleProduct).map((product: any) => (
              <Grid2
                key={product.id}
                size={{
                  xl:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 3
                      : 3,
                  lg:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 2.5
                      : 2.5,
                  md:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 4
                      : 4,
                  sm:
                    layout === "list"
                      ? 12
                      : layout === "two-column"
                      ? 6
                      : layout === "grid"
                      ? 4
                      : 4,
                  xs: layout === "list" ? 12 : 12,
                }}
                sx={{
                  flexGrow: 1,
                  display: "flex",

                  alignItems: "center",
                  justifyContent: "center",
                  // background: "red",
                }}
              >
                {layout === "list" ? (
                  <ItemCard
                    productId={product.id}
                    productImage={product.image}
                    productTitle={product.name}
                    productFeature={product.description}
                    productPrice={product.price}
                    productOldPrice={product.discountPrice}
                  />
                ) : layout === "grid" ? (
                  <ItemListCard
                    productId={product.id}
                    productImage={product.image}
                    productTitle={product.name}
                    productFeature={product.description}
                    productPrice={product.price}
                    productOldPrice={product.discountPrice}
                  />
                ) : (
                  <TwoColumnCard
                    productId={product.id}
                    productImage={product.image}
                    productTitle={product.name}
                    productFeature={product.description}
                    productPrice={product.price}
                    productOldPrice={product.discountPrice}
                  />
                )}
              </Grid2>
            ))
          ) : (
            <Box sx={{ padding: "20px" }}>
              <Typography>No products found</Typography>
            </Box>
          )}
        </Grid2>
      </Box>

      <Badges />
    </div>
  );
};

export default Shop;
