import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import image1 from "../../assets/products/image1.png";
import image2 from "../../assets/products/image2.png";

import image3 from "../../assets/products/image3.png";
import image4 from "../../assets/products/image4.png";
import image6 from "../../assets/products/image6.png";

import image7 from "../../assets/products/image7.png";
import image8 from "../../assets/products/image8.png";
interface ProductCart {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  discount: string;
  overlay?:string;
}
export interface CartState {
  product: ProductCart[];
 
}

const initialState: CartState = {

  product: [
    {
      id: 1,
      name: "Ankbmliu",
      description: "Stylish cafe chair",
      price: 2500000, 
      discountPrice: 3500000, 
      image: image1,
      discount: "New",
    },
    
  ]

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{

    addToCart: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },


  },
})

// Action creators are generated for each case reducer function
export const {  addToCart } = cartSlice.actions

export default cartSlice.reducer