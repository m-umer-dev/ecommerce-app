import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from '../customButtons/customButton';
import {style} from './styles';



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
        <Button sx={style.buyButton}><CustomButton buttonText='Buy Now'/></Button>
        
      </CardActions>
    </React.Fragment>
  );
const BannerText = () => {
  return (
    <Box sx={{ maxWidth: 643 }}>
    <Card variant="outlined" sx={{ background:'#FFF3E3', padding: "10px" }}>{card}</Card>
  </Box>
  )
}

export default BannerText