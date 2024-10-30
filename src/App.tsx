import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Home from "./pages/home";
import Blogs from "./components/blogs/blogs";
import Header from "./components/header";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";
import UsersRecord from "./pages/usersQueries/usersRecord";
import CheckOut from "./pages/checkOut/checkOut";
import Cart from "./pages/cart/cart";
import ProductView from "./pages/productDisplay/productView";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import AboutUs from "./pages/about/aboutUs";
import PageNotFound from "./pages/pageNotFound";
import { SingleProductDisplay } from "./components/productDisplay/singleProductDisplay";

const Layout = () => (
  <>
    <Header />

    <Outlet />

    <Footer />
  </>
);



function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "viewproduct/:Itemid",
          element: <ProductView />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/checkOut",
          element: <CheckOut />,
        },
        {
          path: "/userdata",
          element: <UsersRecord />,
        },
        {
          path: "/product",
          element: <SingleProductDisplay />,
        },
       
      ]
    },
    { path: "*", 
      element: <PageNotFound /> 
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
