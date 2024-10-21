import React, { useEffect, useState } from "react";
import ItemCard from "../../components/productCard/itemCard";
import { useSelector } from "react-redux";
import {
  Box,
  Grid2,
  InputLabel,
  MenuItem,
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

const Shop = () => {
  const allProducts = useSelector((state: any) => state.product.product);

  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Store filtered and sorted products
  const [isAscending, setIsAscending] = useState(""); // Track the sorting order
  const [visibleProduct, setVisibleProduct] = useState(8);
  const [layout, setLayout] = useState("grid");
  console.log({ layout });

  // Function to update the number of visible products
  const showMoreProduct = (event: SelectChangeEvent) => {
    const numberToShow = parseInt(event.target.value, 10); // Convert string to number
    setVisibleProduct(numberToShow); // Update the state with the selected number
  };

  // Filter products when search input changes
  useEffect(() => {
    const filtered = allProducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchItem, allProducts]);

  // Handle sorting change
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

    setIsAscending(order); // Update the selected sorting order
    setFilteredProducts(sortedProducts); // Update the filtered products with sorted data
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
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#F9F1E7",
          marginTop: "0px",
          padding: { xs: "20px", sm: "30px", md: "40px" }, // Adjust padding for different screen sizes
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, row layout on medium and above
        }}
      >
        <TextField
          sx={{
            width: { xs: "100%", sm: "50%", md: "20%" }, // 100% on extra small, 50% on small, 20% on medium and above
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
            width: { xs: "100%", sm: "50%", md: "15%" },
            marginTop: { xs: "16px", sm: "0px" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isAscending}
            label="Sort By"
            onChange={handleChange}
          >
            <MenuItem value="Ascending">Ascending</MenuItem>
            <MenuItem value="Descending">Descending</MenuItem>
          </Select>
        </FormControl>

        {/* Icons for layout change */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => handleLayoutChange("grid")}
            sx={{
              cursor: "pointer",
              marginLeft: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <ViewModuleIcon />
          </Box>

          <Box
            onClick={() => handleLayoutChange("list")}
            sx={{
              cursor: "pointer",
              marginLeft: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <ViewListIcon />
          </Box>

          <Box
            onClick={() => handleLayoutChange("two-column")}
            sx={{
              cursor: "pointer",
              marginLeft: { xs: "auto", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <GridViewIcon />
          </Box>
        </Box>

        <Box sx={{ marginTop: { xs: "16px", sm: "0px" } }}>
          <Typography>
            Showing 1 - {visibleProduct} of {allProducts.length}
          </Typography>
        </Box>

        <FormControl
          sx={{
            width: { xs: "100%", sm: "25%", md: "10%" },
            marginTop: { xs: "16px", sm: "0px" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Show : </InputLabel>
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
            // background:'red',
           
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

                  //  width: {
                  //    xs: "100%", // Full width on extra small devices
                  //    sm: layout === "list" ? "100%" : layout === "two-column" ? "50%" : "50%", // 2 columns on small devices for two-column layout, 50% for grid layout
                  //    md: layout === "list" ? "100%" : layout === "two-column" ? "50%" : "33%", // 2 columns on medium devices for two-column layout, 33% for grid layout
                  //    lg: layout === "list" ? "100%" : layout === "two-column" ? "40%" : "10%", // 2 columns on large devices for two-column layout, 25% for grid layout
                  //    xl: layout === "list" ? "100%" : layout === "two-column" ? "50%" : "50%",
                  //  },
                }}
              >
                <ItemListCard
                  productId={product.id}
                  productImage={product.image}
                  productTitle={product.name}
                  productFeature={product.description}
                  productPrice={product.price}
                  productOldPrice={product.discountPrice}
                />
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
