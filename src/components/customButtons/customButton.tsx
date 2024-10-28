import React from 'react'
import {style} from './styles'
import { Button } from '@mui/material';


interface ButtonValues{
  children?: React.ReactNode;

    onClick: () => void;
}
const CustomButton = ({children,onClick,}:ButtonValues) => {
  return (
    
    <Button onClick={onClick} sx={style.exploreMore}>{children}</Button>
    
  )
}

export default CustomButton
