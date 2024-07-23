import { Box, Divider, Grid, Typography } from '@mui/material';
import DesktopBanner from "../../assets/image/banner2.jpg";
import MobileBanner from "../../assets/image/banner2Mobil.jpg";
import styled from '@emotion/styled';
import CommentCard from './Adds/CommentCard';
 
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
    <Grid container sx={{  display: "flex", margin: "auto" }}>
    
      <DesktopImg src={DesktopBanner} alt='desktop banner' />
      <MobileImg src={MobileBanner} alt='mobile banner' />
      <Grid>
        <Typography sx={{}} variant='button'>Gerçek Müşteri Yorumları</Typography>
        <Divider />
    <Box>
    <CommentCard/>
    </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;
