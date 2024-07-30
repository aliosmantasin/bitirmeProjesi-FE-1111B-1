import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react';
import FiveStars from './Stars/FiveStars';
import FourStars from './Stars/FourStars';
import ThreeStars from './Stars/ThreStars';
import TwoStars from './Stars/TwoStars';
import OneStars from './Stars/OneStars';

const RateOfComment = () => {

    const [value, setValue] = React.useState<number | null>(5);

  return (
    <>
     <Box component="section" sx={{ p: 2}}>
            <Grid sx={{width:"100%", display:"flex", justifyContent:"space-between", mx:"auto"}}>


        <Grid sx={{alignItems:"center", justifyContent:"center"}}>
        <Typography variant='button' display="block" gutterBottom sx={{fontSize:"1.3rem", textAlign:"center"}}>4.8</Typography>   
        <Rating name="half-rating-read" value={value} onChange={(_event, newValue) => {
                setValue(newValue);
              }} readOnly />
        <Typography variant='caption' display="block" gutterBottom sx={{textAlign:"center"}}>10869 Yorum</Typography>
        </Grid>



        <Grid> 
            <Stack sx={{my:1}}>
                <Grid gap={5} width={400} height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <Box sx={{width:"40%", height:"20px", display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <FiveStars/> 
                        </Box>

                    <Box sx={{backgroundColor:"#dddddd", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"80%", height:"20px"}}></Box>
                    </Box>
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={5} width={400} height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <Box sx={{width:"40%", height:"20px", display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <FourStars/> 
                        </Box>

                    <Box sx={{backgroundColor:"#dddddd", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"8%", height:"20px"}}></Box>
                    </Box>
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={5} width={400} height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <Box sx={{width:"40%", height:"20px", display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <ThreeStars/> 
                        </Box>

                    <Box sx={{backgroundColor:"#dddddd", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"3%", height:"20px"}}></Box>
                    </Box>
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={5} width={400} height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <Box sx={{width:"40%", height:"20px", display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <TwoStars/> 
                        </Box>

                    <Box sx={{backgroundColor:"#dddddd", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"1%", height:"20px"}}></Box>
                    </Box>
                    
                </Grid>
            </Stack>

            <Stack sx={{my:1}} >
                <Grid  gap={5} width={400} height={20} sx={{display:"flex", justifyContent:"center", alignItems:"centers"}}>
                        <Box sx={{width:"40%", height:"20px", display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <OneStars/> 
                        </Box>

                    <Box sx={{backgroundColor:"#dddddd", width:"100%", height:"20px", display:"flex", alignItems:"centers"}}>
                        <Box sx={{backgroundColor:"#2327ac", width:"1%", height:"20px"}}></Box>
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