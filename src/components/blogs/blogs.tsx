import React from "react";
import BlogCard from "../../components/blogs/blogCard";
import Header from "../header";
import Footer from "../footer";
import { useSelector } from "react-redux";
import { Box, Grid2 } from "@mui/material";
import ItemCard from "../productCard/itemCard";

const Blogs = () => {
  const allBlog = useSelector((state: any) => state.blogs.allBlogs);
  return (
    <div>

      <Box
        sx={{
          padding: "40px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*  rowSpacing={2} columnSpacing={{xl:1 , lg: 0.5, md: 4, sm: 6, xs: 12  }}  */}
        <Grid2
          container
          spacing={0.5}
          rowSpacing={2}
          sx={{  display: "flex",
            flexDirection: "column",}}
          // columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
        >
          {allBlog.map((blog: any) => (
            <Grid2
              container
              spacing={0.5}
              sx={{
                display: "flex",
                
                alignItems: "center",
                justifyContent: "center",
              }}
              size={{ xl: 8, lg: 8, md: 4, sm: 12, xs: 12 }}
              key={blog.id}
            >
              <BlogCard
                image={blog.image}
                admin={blog.admin}
                postDate={blog.postDate}
                tag={blog.tag}
                postTitle={blog.title}
                postDetail={blog.discription}
              />
              <Grid2 />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default Blogs;
