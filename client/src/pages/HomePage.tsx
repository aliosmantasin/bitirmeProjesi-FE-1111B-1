import { Fragment } from 'react/jsx-runtime';
import FirstGlance from '../component/HomePage/FirstGlance';
import Categories from '../component/Categories/Categories';
import Banner from '../component/HomePage/Banner';
import Guarantee from '../component/HomePage/Guarantee';
import { Grid, Typography } from '@mui/material';
import BestSellersProduct from '../component/Product/BestSellerProduct/BestSellersProduct';
import { BestSellersProductData } from '../component/Product/BestSellerProduct/BestSellersProductData';

const HomePage = () => {
  return (
    <Fragment>
      <FirstGlance />
      <Categories />
      <Grid component="section">
            <Grid item xs={12}>
            <Typography sx={{ textTransform: 'uppercase', width: '100%', display: 'flex', justifyContent: 'center' }} variant="h6">
              Çok Satanlar
            </Typography>
          </Grid>
      <BestSellersProduct products={BestSellersProductData}/>
      </Grid>
    
      <Banner />
      <Guarantee/>
    </Fragment>
  );
};

export default HomePage;
