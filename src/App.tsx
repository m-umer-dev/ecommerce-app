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

const Layout = () => (
  <>
    <Header />
    
    <Outlet />
    <Footer/>
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
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact/>,

        },
        {
          path: "/userdata",
          element: <UsersRecord/>,

        },
        {
          path: "*",
          element: "Page Not Found",
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
