import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import image1 from "../../assets/products/image1.png";

interface ProductCart {
  id: number;
  name: string;
  description: string;
  price: number; 
  discountPrice: number;
  image: string;
  discount: string;
  quantity: number; 
 

}

export interface CartState {
  product: ProductCart[];
  total: number; 
}

const initialState: CartState = {
  product: [ ],
  total: 0, // Initialize total
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const existingProduct = state.product.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
      state.total = state.product.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.product.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity; 
      }
      state.total = state.product.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {  
      state.product = state.product.filter(product => product.id !== action.payload);
      
      state.total = state.product.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    }
  },
});


export const { addToCart, updateQuantity, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
