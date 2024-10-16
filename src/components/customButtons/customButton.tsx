import React from 'react'
import {style} from './styles'
import { Button } from '@mui/material';


interface ButtonValues{
    buttonText: string;
}
const CustomButton = ({buttonText}:ButtonValues) => {
  return (
    
    <Button sx={style.exploreMore}>{buttonText}</Button>
    
  )
}

export default CustomButton
