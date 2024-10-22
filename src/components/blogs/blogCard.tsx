import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2';
import Image1 from '../../assets/blogImage.png'
import Admin from '@mui/icons-material/Person';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import TagIcon from '@mui/icons-material/LocalOffer';
import { Stack } from '@mui/material';

interface blogCardValues{
    image:string,
    admin:string,
    postDate?: any,
    tag: string,
    postTitle: string,
    postDetail: string,
    
}
const BlogCard = ({image,admin,postDate,tag,postTitle,postDetail}:blogCardValues) => {
  return (
    <>
    <Card sx={{ width: '945px' }}>
      <CardMedia
        sx={{ height: 250 }}
        image={Image1}
        // title="green iguana"
      />
      <Grid2 container spacing={1} sx={{display:'flex',color:'#9F9F9F', padding:'10px'}}>
      <Stack direction='row' alignContent='center' justifyItems='center'>
      <Admin/> 
      <Typography gutterBottom  component="div">
         {admin}
        </Typography>
        </Stack>

        <Stack direction='row' alignContent='center' justifyItems='center'>
        <CalendarIcon/>
        <Typography gutterBottom  component="div">
          {postDate}
        </Typography>
        </Stack>

        <Stack direction='row' alignContent='center' justifyItems='center'>
        <TagIcon />
        <Typography gutterBottom  component="div">
         {tag}
        </Typography>
        </Stack>
        
      </Grid2>
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
          {postTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {postDetail}
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
    </>
  );
}


export default BlogCard