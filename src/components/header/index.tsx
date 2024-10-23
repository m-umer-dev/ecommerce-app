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
import { Navigation } from "@mui/icons-material";

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
interface Props {
  
  navigate?:string;
  navItems?:any;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Shop", "About", "Contact"];

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const goTo = (item:string) => {
  
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* variant="h6" sx={{ my: 1 }} */}
      <Typography  sx={style.logoText}>
        Furnior
      </Typography>
      <Divider />
      <List sx={{color: 'black'}}>
        {navItems.map((item) => (
          <ListItem sx={{color: 'black'}} key={item} disablePadding>
            <ListItemButton sx={{color: 'black', textAlign: "center" }}>
              <ListItemText  sx={{color: 'black'}} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", background:'red'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background:'white', color: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display:'flex',flexGrow: 1, margin: "10px" }}>
            <Box component="img" src={logo} alt="logo" sx={style.logo} />
            <Typography  sx={style.logoText}>Furniro</Typography>
            {/* sx={{padding:'5px'}} */}
          </Box>
         

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" ,lg:"flex"} }}>
            {navItems.map((item) => (
              <Button sx={style.navText}  key={item}    onClick={()=>goTo(item)}>
                {item}
              </Button>
            ))}
          </Box>

          <Box
            // variant="h6"
            component="div"
            sx={{
              width: "20%",
              padding: "5px",
              display: { lg: 'flex',xs: "none", sm: "none" },
            }}
          >
            <IconButton aria-label="user" component={Link} to="/shop">
              <PersonOutlineIcon />
            </IconButton>
            <IconButton aria-label="search" component={Link} to="/shop">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Favorite" component={Link} to="/shop">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="cart" component={Link} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
export default Header;
