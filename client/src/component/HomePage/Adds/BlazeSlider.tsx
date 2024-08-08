import { Box, Grid, Typography, IconButton, Rating } from '@mui/material';
import 'blaze-slider/dist/blaze.css';
import { useBlazeSlider } from './useBlazeSlider';
import CommentCard from './CommentCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';

const BlazeSliderComponent = () => {
  const { sliderElRef } = useBlazeSlider({
    all: {
      slidesToShow: 4,
      slidesToScroll: 1,
      loop: true,
      enableAutoplay: false,
      autoplayInterval: 3000,
      transitionDuration: 500,
      slideGap: '4rem',
    },
    "(max-width: 768px)": {
      slidesToShow: 3,
      slideGap: '1rem',
    }, 
    "(max-width: 600px)": {
      slidesToShow: 1,
      slideGap: '1rem',
    },
 
  });

const [value, setValue] = React.useState<number | null>(4);

  return (
    
    <Grid container maxWidth="lg"  sx={{ margin:"auto auto 4rem auto",justifyContent:"center"}}>
      <div className="blaze-slider" ref={sliderElRef}>
        <div className="blaze-container" style={{width:"100%"}}>
          <Grid item mt={3} mx={5} sx={{display:{sx:"block", sm:"flex"}, justifyContent:"space-between", borderBottom:"1px solid #d2d2d2",}}>

            <Typography sx={{ textAlign: "start",p:0 }} variant='h6'>Gerçek Müşteri Yorumları</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <Box sx={{display:"flex"}}>
            
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                />
                    <Typography sx={{textDecoration:"underline"}} component="legend">198453 Yorum</Typography>
              </Box>
              <Box sx={{ maxWidth:"350px"}}>
              <IconButton className="blaze-prev">
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton className="blaze-next">
                <ArrowForwardIosIcon />
              </IconButton>
              </Box>
            </Box>
          </Grid>
   
          <Box className="blaze-track-container" sx={{mt:2, p:2, maxWidth:{xs:"250px", sm:"100%"}, justifyContent:"center", margin:"auto"}}>
            <Box className="blaze-track">
              <Box><CommentCard /></Box>
              <Box><CommentCard /></Box>
              <Box><CommentCard /></Box>
              <Box><CommentCard /></Box>
              <Box><CommentCard /></Box>
              <Box><CommentCard /></Box>
            </Box>
          </Box>
        </div>
      </div>
    </Grid>
  );
}

export default BlazeSliderComponent;
