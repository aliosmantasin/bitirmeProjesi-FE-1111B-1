import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react';
import FiveStars from './Stars/FiveStars';
import FourStars from './Stars/FourStars';
import ThreeStars from './Stars/ThreStars';
import TwoStars from './Stars/TwoStars';
import OneStars from './Stars/OneStars';
import styled from '@emotion/styled';


const CustomStars = styled(Box)`
    width: 40%;
    height: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    @media (max-width:600px){
        display: none;
    }
`



const RateOfComment = () => {

    const [value, setValue] = React.useState<number | null>(5);

  return (
    <>
     <Box component="section" p={2}>
        
        <Grid  item container maxWidth="lg" sx={{display:{xs:"block", sm:"flex"}, justifyContent:{xs:"center",sm:"center", md:"space-between"}, mx:"auto"}}>

        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Grid sx={{ alignItems:"center", justifyContent:"center"}}>
        <Typography variant='button' display="block" sx={{fontSize:"1.5rem", textAlign:"center"}}>4.8</Typography>   
        <Box sx={{display:"flex", margin:"auto", justifyContent:"center"}}>
        <Rating name="half-rating-read" value={value} onChange={(_event, newValue) => {
                setValue(newValue);
              }} readOnly />

        </Box>
        <Typography variant='caption' display="block" gutterBottom sx={{textAlign:"center"}}>10869 Yorum</Typography>
        </Grid>
        </Box>


        <Grid sx={{width:{xs:"auto", sm:"400px"}}}> 
            
            <Stack sx={{my:1}}>
                <Grid gap={1}  height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <CustomStars>
                        <FiveStars/> 
                        </CustomStars>

                    <Box sx={{backgroundColor:"#f7f7f7", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"80%", height:"20px"}}></Box>
                      
                    </Box>

                    <Box sx={{minWidth:"10%"}}>
                    <Typography>(9284)</Typography>
                    </Box>
                  
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={1}  height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <CustomStars>
                        <FourStars/> 
                        </CustomStars>

                    <Box sx={{backgroundColor:"#f7f7f7", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"8%", height:"20px"}}></Box>
                    </Box>

                    
                    <Box sx={{minWidth:"10%"}}>
                    <Typography>(1316)</Typography>
                    </Box>
                  
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={1}  height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <CustomStars>
                        <ThreeStars/> 
                        </CustomStars>

                    <Box sx={{backgroundColor:"#f7f7f7", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"3%", height:"20px"}}></Box>
                    </Box>

                    
                    <Box sx={{minWidth:"10%"}}>
                    <Typography>(226)</Typography>
                    </Box>
                  
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={1}  height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <CustomStars>
                        <TwoStars/> 
                        </CustomStars>

                    <Box sx={{backgroundColor:"#f7f7f7", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"1%", height:"20px"}}></Box>
                    </Box>

                   
                    <Box sx={{minWidth:"10%"}}>
                    <Typography>(32)</Typography>
                    </Box>
                  
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={1}  height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <CustomStars>
                        <OneStars/> 
                        </CustomStars>

                    <Box sx={{backgroundColor:"#f7f7f7", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"1%", height:"20px"}}></Box>
                    </Box>

                   
                    <Box sx={{minWidth:"10%"}}>
                    <Typography>(11)</Typography>
                    </Box>
                  
                    
                </Grid>
            </Stack>

        </Grid>

        </Grid>
        </Box>
       
    </>
  )
}

export default RateOfComment