import { Box } from '@mui/material'
import pagenotfound from '../../assets/pageNotFound.jpg'
const PageNotFound = () => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin: '20px',paddingTop:'20px',textAlign:'center',height:'600px',}}>
        <img
        src={pagenotfound}
        width='50%'
        height= '50%vh'
        
        />
    </Box>
    </>
  )
}

export default PageNotFound