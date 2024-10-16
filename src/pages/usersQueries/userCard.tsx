import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import {style} from './styles'

interface userCardValues {
    userId?: number;
    userName: string;
    userEmail: string;
    userSubject: string;
    userMessage: string;
  }

export const UserCard = ({userId,userName,userEmail,userSubject,userMessage}:userCardValues) => {
  return (
    <Card sx={{ width: '280px', background: "#F4F5F7"}}>

    <Box sx={style.productDetail}>
      <CardContent>
        <Typography sx={style.productTitle}>{userName}</Typography>
        <Typography sx={style.productFeature}>{userEmail}</Typography>
        <Typography sx={style.productTitle}>{userSubject}</Typography>
        <Typography sx={style.productFeature}>{userMessage}</Typography>
      </CardContent>

      
    </Box>
  </Card>
  )
}
