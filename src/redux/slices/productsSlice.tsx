import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import image1 from "../../assets/products/image1.png";
import image2 from "../../assets/products/image2.png";

import image3 from "../../assets/products/image3.png";
import image4 from "../../assets/products/image4.png";
import image6 from "../../assets/products/image6.png";

import image7 from "../../assets/products/image7.png";
import image8 from "../../assets/products/image8.png";


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    image: string;
    discount: string;
    overlay?:string;
  }
  
  interface Inspiration {
    title: string;
    image: string;
    category: string;
    overlay?:string;
  }
  
  interface Category {
    name: string;
    image: string;
    overlay?:string;
  }
  
  
  export interface ProductState {
    product: Product[];
    products: Product[];
    inspiration: Inspiration[];
    categories: Category[];
  }
  

const initialState: ProductState = {
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
        {
          id: 2,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image2,
          discount: "New",
        },
        {
          id: 3,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image3,
          discount: "New",
        },
        {
          id: 4,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image4,
          discount: "New",
        },
        {
          id: 5,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 6,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image6,
          discount: "New",
        },
        {
          id: 7,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image7,
          discount: "New",
        },
        {
          id: 8,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image8,
          discount: "New",
        },
        {
          id: 9,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 10,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image2,
          discount: "New",
        },
        {
          id: 11,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image3,
          discount: "New",
        },
        {
          id: 12,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image4,
          discount: "New",
        },
        {
          id: 13,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 14,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image6,
          discount: "New",
        },
        {
          id: 15,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image7,
          discount: "New",
        },
        {
          id: 16,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image8,
          discount: "New",
        },
        {
          id: 17,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 18,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 19,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 20,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 21,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        
        {
          id: 22,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        },
        {
          id: 23,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "-30%",
        },
      ],
      products: [
        {
          id: 1,
          name: "Absherine",
          description: "Stylish cafe chair",
          price: 2500000,
          discountPrice: 3500000, 
          image: image1,
          discount: "-50%",
        //   overlay: overlay,
        },
        {
          id: 23,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image2,
          discount: "-30%",
        //   overlay: overlay,
        },
        {
          id: 25,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000,
          image: image3,
          discount: "New",
          overlay: image1,
        },
        {
          id: 26,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image4,
          discount: "-50%",
        //   overlay: overlay,
        },
        {
          id: 27,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "-30%",
          overlay: image1,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image6,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image7,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image8,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        }, {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        }, {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        }, {
          id:28,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        }, {
          id:28,
          name: "Yijjvcgfhki",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "New",
        //   overlay: overlay,
        },
        {
          id: 29,
          name: "Vyltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000, 
          image: image1,
          discount: "-30%",
        //   overlay: overlay,
        },
        {
          id: 30,
          name: "Ahyuglgvnm",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000,
          image: image1,
          discount: "-50%",
        //   overlay: overlay,
        },
        {
          id: 31,
          name: "Sjgyhjkuky",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000,
          image: image1,
          discount: "-50%",
        //   overlay: overlay,
        }, {
          id: 32,
          name: "Abyltherine",
          description: "Stylish cafe chair",
          price: 2500000, 
          discountPrice: 3500000,
          image: image1,
          discount: "-50%",
        //   overlay: overlay,
        },
      ],
      inspiration: [
        {
          title: "Inner Peace",
          image: "path_to_image_2",
          category: "Bed Room",
        },
      ],
      categories: [
        {
          name: "Dining",
          image: image1,
        },
        {
          name: "Living",
          image: image1,
        },
        {
          name: "Bedroom",
          image: image1,
        },
      ]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   
    setProducts: (state, action: PayloadAction<Product[]>) => {
        state.product = action.payload;
      },


  },
})

// Action creators are generated for each case reducer function
export const {  setProducts } = productSlice.actions

export default productSlice.reducer