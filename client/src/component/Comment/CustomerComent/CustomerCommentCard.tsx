import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import React from 'react';
import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const CustomButton = styled(Button)`
    background: rgb(170,204,255);
    background: linear-gradient(84deg, rgba(170,204,255,1) 0%, rgba(34,38,172,1) 96%);
`

const CustomerCommentCard = () => {

    const [value, setValue] = React.useState<number | null>(4);

  return (
    <>
    <Box component="section" sx={{ p:1}}>
    <Grid item container maxWidth="lg" mb={3} sx={{ mx:"auto"} }>
                <CustomButton variant="contained" sx={{backgroundColor:"blue"}}>YORUM (10869)</CustomButton>

                </Grid>
        <Grid item container maxWidth="lg" mb={3} p={3} sx={{backgroundColor:"#f7f7f7", borderRadius:"10px", mx:"auto"} }>

            <Box sx={{ width:"100%",display:"flex", justifyContent:"space-between"}}>
                <Box sx={{display:"flex"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                    <Rating name="half-rating-read"  value={value}  onChange={(_event, newValue) => {
                setValue(newValue);
                }} readOnly />
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                    <Typography sx={{fbackgroundColor:"yellow"}} >EREN U.</Typography>
                    </Box>
                 </Box>

                 <Box>
                    <Typography variant='caption'>06/05/2024</Typography>
                 </Box>
            </Box>

            <Box>
                <Typography my={1} sx={{fontWeight:"bold"}} display="block">Her zamanki kalite. Teşekkürler</Typography>
      
                <Typography my={1} variant='body2' display="block">Yıllardır en beğendiğim protein tozu protein gr ne kadar düşük olsada</Typography>
            </Box>
        </Grid>


        <Grid item container maxWidth="lg" mb={3} p={3} sx={{backgroundColor:"#f7f7f7", borderRadius:"10px", mx:"auto"} }>
            <Box sx={{ width:"100%",display:"flex", justifyContent:"space-between"}}>
                <Box sx={{display:"flex"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                    <Rating name="half-rating-read"  value={value}  onChange={(_event, newValue) => {
                setValue(newValue);
                }} readOnly />
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                    <Typography sx={{fbackgroundColor:"yellow"}} >EREN U.</Typography>
                    </Box>
                 </Box>

                 <Box>
                    <Typography variant='caption'>06/05/2024</Typography>
                 </Box>
            </Box>

            <Box>
                <Typography my={1} sx={{fontWeight:"bold"}} display="block">Her zamanki kalite. Teşekkürler</Typography>
      
                <Typography my={1} variant='body2' display="block">Yıllardır en beğendiğim protein tozu protein gr ne kadar düşük olsada</Typography>
            </Box>
        </Grid>

              <Box sx={{display:"flex", justifyContent:"center"}}>
                  <Stack spacing={2}>
                      <Pagination
                          count={20}
                          renderItem={(item) => (
                              <PaginationItem
                                  slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                                  {...item}
                              />
                          )}
                      />
                  </Stack>
              </Box>  
    </Box>
    
    </>
  )
}

export default CustomerCommentCard