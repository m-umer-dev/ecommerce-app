import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './pages/shop/shop';
import Home from './pages/home';
import ItemCard from './components/productCard/itemCard';
import Blogs from './components/blogs/blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop/>,
  },
  {
    path: "blogs",
    element: <Blogs/>
  },
  {
    path: '*',
    element: "Page Not Found",
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
   <RouterProvider router={router} /> 
  
  
</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
