import { Box, Grid } from '@mui/material';
import DesktopBanner from "../../assets/image/banner.jpeg";
import MobileBanner from "../../assets/image/mobil-banner.jpg";
import styled from '@emotion/styled';

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

const FirstGlance = () => {
  return (
    <Box component="section">
    <Grid sx={{ width: "100%" }}>
      <DesktopImg src={DesktopBanner} alt='desktop banner' />
      <MobileImg src={MobileBanner} alt='mobile banner' />
    </Grid>
    </Box>
  );
}

export default FirstGlance;
