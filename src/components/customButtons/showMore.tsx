import { Button } from '@mui/material'
import React from 'react'
import {style} from './styles'

interface ButtonValues{
    buttonText: string;
}
const ShowMore = ({buttonText}:ButtonValues) => {
  return (
    <>
    <Button  sx={style.buttonDesign}>{buttonText}</Button>
    </>
  )
}

export default ShowMore