import { Box, Grid, Typography, IconButton, Rating, Divider } from '@mui/material';
import 'blaze-slider/dist/blaze.css';
import { useBlazeSlider } from './useBlazeSlider';
import CommentCard from './CommentCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';

const BlazeSliderComponent = () => {
  const { sliderElRef } = useBlazeSlider({
    all: {
      slidesToShow: 1,
      slidesToScroll: 1,
      loop: true,
      enableAutoplay: false,
      autoplayInterval: 3000,
      transitionDuration: 500,
      slideGap: '4rem',
    },
    "(min-width: 600px)": {
      slidesToShow: 4,
      slideGap: '1rem',
    },
 
  });

const [value, setValue] = React.useState<number | null>(4);

  return (
    
    <Grid container maxWidth="lg" sx={{ xs: "12", sm: "8", margin:"auto",justifyContent:"center"}}>
      <div className="blaze-slider" ref={sliderElRef}>
        <div className="blaze-container" style={{width:"100%"}}>
          <Grid item sx={{display:{sx:"block", sm:"flex"}, justifyContent:"space-between"}}>
            <Typography sx={{ textAlign: "start", mt: 2,p:{xs:"0.5rem", sm:"2rem"} }} variant='h6'>Gerçek Müşteri Yorumları</Typography>
            <Box sx={{display:"flex", p:0.5, justifyContent:"space-between", alignItems:"center"}}>
              <Box sx={{display:"flex"}}>
                <Typography component="legend">198453 Yorum</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                />
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
         <Divider />
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
