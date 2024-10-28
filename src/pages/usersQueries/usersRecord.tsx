import { Box, Button, Grid2 } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { UserCard } from './userCard';
import CustomButton from '../../components/customButtons/customButton';
import { useNavigate } from 'react-router-dom';
import CustomButtonComponent from '../../components/customButtons/customButtonComponent';


const UsersRecord = () => {
  const allContact = useSelector((state: any) => state.users.allUsers);
  const navigate = useNavigate();
  const goBack = () =>{
    navigate("/contact");
  }

  return (
    <>
    <Box sx={{marginTop: "70px",display:'flex',}}>
    <Box sx={{ flexGrow: 1, padding: "10px" }}>
      <Grid2 container spacing={2}>
        {allContact.map((user: any) => (
          <Grid2 size={{ xl: 3, lg: 2, md: 3, sm: 4, xs: 12 }} key={user.id}>
            <UserCard
            userName={user.name}
              userEmail={user.email}
              userSubject={user.subject}
              userMessage={user.message}
             
              userId={user.id}
            />
            <Grid2 />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  
   <CustomButtonComponent
   border="none"
   color="white"
  background= "#B88E2F"
   height = "50px"
   onClick={() => goBack}
   radius = "10px"
   width = "150px"
   children = "Back"
        />
    </Box>
   
  </>
  )
}

export default UsersRecord