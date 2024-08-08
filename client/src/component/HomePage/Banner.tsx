import {  Box, Grid } from '@mui/material';
import DesktopBanner from "../../assets/image/banner2.jpg";
import MobileBanner from "../../assets/image/banner2Mobil.jpg";
import styled from '@emotion/styled';
import BlazeSliderComponent from './Adds/BlazeSlider';

const CustomImg = styled("img")`
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

const DesktopImg = styled(CustomImg)`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

const MobileImg = styled(CustomImg)`
  display: block;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Banner = () => {
  return (
    <Box component="section">
    <Grid container sx={{ display: "flex", margin: "auto"}}>
      <DesktopImg src={DesktopBanner} alt='desktop banner' />
      <MobileImg src={MobileBanner} alt='mobile banner' />
          <BlazeSliderComponent />
    </Grid>
    </Box>
  );
}

export default Banner;
