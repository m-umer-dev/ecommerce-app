import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import image1 from "../../assets/blogImage.png";
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

export interface blogValues {
  // allBlogs: any;
  id: number;
  image: string;

    admin: string;
    postDate: string;
    tag: string;
    title: string;
    discription: string;

}
export interface blogState {
  allBlogs: blogValues[];
}
const initialState: blogState = {
  allBlogs: [
    {
      id: 1,
      image: image1,
      admin: "umer",
      postDate: "12 oct 2024",
      tag: "wood",
      title: "Going all-in with millennial design",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
        id: 2,
        image: image2,
        admin: "Areeb",
        postDate: "12 oct 2024",
        tag: "wood",
        title: "Exploring new ways of decorating",
        discription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      },
      {
        id: 3,
        image: image3,
        admin: "Ali",
        postDate: "12 oct 2024",
        tag: "wood",
        title: "Handmade pieces that took time to make",
        discription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      },
  ],
};
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<blogValues[]>) => {
      state.allBlogs = action.payload;
    },
  },
});

export const { setProducts } = blogSlice.actions;

export default blogSlice.reducer;
