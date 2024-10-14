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
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Navigation } from "@mui/icons-material";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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
      navigate("/home");
    } else if (item === "About") {
      navigate("/about");
    } else if (item === "Contact") {
      navigate("/contact");
    }
      
    
    
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        Furnior
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Box sx={{ margin: "10px" }}>
            <Box component="img" src={logo} alt="logo" sx={style.logo} />
          </Box>
          <Typography>Furniro</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button  key={item} sx={{ color: "#ffffff" }}  onClick={()=>goTo(item)}>
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
              display: { xs: "none", sm: "block" },
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
            <IconButton aria-label="cart" component={Link} to="/shop">
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
