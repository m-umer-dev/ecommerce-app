import React from "react";
import { style } from "./styles";
// import { classes } from "./styles";

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { useDispatch, useSelector } from "react-redux";
interface Props {
  navigate?: string;
  navItems?: any;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Shop", "About", "Contact"];

const Header = (props: Props) => {
  const value = useSelector((state: any) => state.cart.value);
  const dispatch = useDispatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 

  const navigate = useNavigate();

  const goTo = (item: string) => {
    if (item === "Shop") {
      navigate("/shop");
    } else if (item === "Home") {
      navigate("/");
    } else if (item === "About") {
      navigate("/aboutUs");
    } else if (item === "Contact") {
      navigate("/contact");
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block",lg:"none",md:"none" } }}
          >
            <MenuIcon />
          </IconButton>


          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              margin: "10px",
              justifyContent: { xs: "center", sm: "center" },
            }}
          >
            <Box />
            <Box
              component={Link}
              to="/shop"
              sx={{
                display: "flex",
                width: "35px",
                height: "35px",
                listStyle: "none",
                textDecoration: "none",
              }}
            >
              <img src={logo} />
              <Typography sx={style.logoText}>Furniro</Typography>
            </Box>
          </Box>


          {/* Right Side Menu on Small Devices  View */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
           
            
          </IconButton>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", sm: "flex", lg: "flex" },
              alignItems:'center',
              justifyContent:'center',
            }}
          >
            {navItems.map((item) => (
              <Typography sx={style.navText} key={item} onClick={() => goTo(item)}>
                {item}
              </Typography>
            ))}
          </Box>

          <Box
            component="div"
            sx={{
              width: "20%",
              padding: "5px",
              display: { lg: "flex", xs: "none", sm: "none" },
            }}
          >
            <IconButton aria-label="user" component={Link} to="/shop" sx={style.rightSideIcons}>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton aria-label="search" component={Link} to="/blogs" sx={style.rightSideIcons}>
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Favorite" component={Link} to="/shop" sx={style.rightSideIcons}>
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="cart" component={Link} to="/cart" sx={style.rightSideIcons}>
              <ShoppingCartIcon />
            </IconButton>
            {value !== 0 ? (
              <Box
                sx={{
                  marginLeft: "-18px",
                  width: "20px",
                  height: "20px",
                  zIndex: "9",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    background: "red",
                    color: "white",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: 100,
                    borderRadius: 10,
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ) : (
              <Box> </Box>
            )}
          </Box>
        </Toolbar>

        
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "column" },
              marginTop: { xs: "20px" },
            }}
          >
            {navItems.map((item) => (
              <Button sx={style.navText} key={item} onClick={() => goTo(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};
export default Header;
