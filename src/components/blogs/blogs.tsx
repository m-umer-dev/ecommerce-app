import React from 'react'
import BlogCard from "../../components/blogs/blogCard";
import Header from '../header';
import Footer from '../footer';
import { useSelector } from 'react-redux';
import { Box, Grid2 } from '@mui/material';
import ItemCard from '../productCard/itemCard';

const Blogs = () => {
    const allBlog = useSelector((state: any) => state.blogs.allBlogs);
  return (

        // <Header/>
        // <BlogCard
        // image=''
        // admin='umer'
        // postDate='14 oct 2024'
        // tag='wood'
        // postTitle="first post"
        // postDetail="skdflsdjflsjfsklfjklsjfls"/>
        // <Footer/>

        <div>
            <Header/>
        
        {/* <Header /> */}
        {/* <Box component="img" src={shopBanner} alt="logo" sx={style.box}></Box> */}
        {/* display: 'flex', justifyContent: 'center', alignItems:'center',padding: '40px' */}
        <Box sx={{ padding: "40px" }}>
          {/*  rowSpacing={2} columnSpacing={{xl:1 , lg: 0.5, md: 4, sm: 6, xs: 12  }}  */}
          <Grid2
            container
            spacing={0.5}
            rowSpacing={2}
            columnSpacing={{ xl: 0.5, lg: 0.5, md: 4, sm: 6, xs: 12 }}
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
                size={{ xl: 2, lg: 3, md: 4, sm: 3, xs: 12 }}
                key={blog.id}
              >
                <BlogCard
        image={blog.image}
        admin={blog.admin}
        postDate={blog.postDate}
        tag={blog.tag}
        postTitle={blog.title}
        postDetail={blog.discription}/>
                <Grid2 />
              </Grid2>
            ))}
          </Grid2>
        </Box>
        {/* <Footer/> */}
      </div>
    
  )
}

export default Blogs