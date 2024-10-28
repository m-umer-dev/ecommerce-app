import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from '../customButtons/customButton';
import {style} from './styles';
import { useNavigate } from 'react-router-dom';
import CustomButtonComponent from '../customButtons/customButtonComponent';


  
const BannerText = () => {
  const navigate = useNavigate();

  const goTo= ()=>{
    console.log("clicked");
    navigate("/shop");
  }
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={style.featureText}>
        New Arrival
        </Typography>
        <Typography  sx={style.mainText}>
        Discover Our New Collection
        </Typography>
        <Typography sx={style.smallDiscription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
          <CustomButtonComponent 
          mode='outlined'
                radius="0px"
                children="Buy Now"
                onClick={goTo}
               
              />
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 643,display:{sm:12,xs:12},flexWrap:"wrap",padding:{xs:"0px",sm:"0px",lg:"0px"},justifyContent:{xs:"center"},
     }}>
    <Card  sx={{ background:'#FFF3E3',display:{sm:12,xs:12},flexWrap:"wrap",padding:{xs:"0px",sm:"0px",lg:"20px"},justifyContent:{xs:"center"}}}>{card}</Card>
  </Box>
  )
}

export default BannerText