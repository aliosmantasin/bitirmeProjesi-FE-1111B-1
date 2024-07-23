import { Box, Grid, Rating, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import WheyProtein from "../../assets/image/product/WheyProtein.jpeg";
import FitnesPackage from "../../assets/image/product/FITNESSPAKETİ.jpeg";
import DailyVitamin from "../../assets/image/product/GunlukVitamin.jpeg";
import PreWorkout from "../../assets/image/product/PRE-WORKOUTSUPREME.jpeg";
import CreamOfRice from "../../assets/image/product/CREAM OFRICE.jpeg";
import Creatine from "../../assets/image/product/CREATINE.jpeg";
import React from "react";

interface Product {
  name: string;
  path: string;
  img: string;
  description: string;
  comment: string;
  oldprice: string;
  discount?: string;
}

const ProductCard: Product[] = [
  {
    name: 'Whey Protein',
    path: '/',
    img: WheyProtein,
    description: 'En çok tercih edilen protein takviyesi',
    comment: '10869 Yorum',
    oldprice: '549',
  },
  {
    name: 'Fitnes Paketi',
    path: '/',
    img: FitnesPackage,
    description: 'En popüler ürünler bir arada',
    comment: '10869 Yorum',
    oldprice: '1126',
    discount: '29',
  },
  {
    name: 'Günlük Vitamin Paketi',
    path: '/',
    img: DailyVitamin,
    description: 'En sık tüketilen takviyeler',
    comment: '10869 Yorum',
    oldprice: '717',
    discount: '23',
  },
  {
    name: 'Pre-Workout Supreme',
    path: '/',
    img: PreWorkout,
    description: 'Antreman öncesi takviyesi',
    comment: '10869 Yorum',
    oldprice: '399',
  },
  {
    name: 'Cream Of Rice',
    path: '/',
    img: CreamOfRice,
    description: 'En lezzetli pirinç kreması',
    comment: '10869 Yorum',
    oldprice: '239',
  },
  {
    name: 'Creatine',
    path: '/',
    img: Creatine,
    description: 'En popüler sporcu takviyesi',
    comment: '10869 Yorum',
    oldprice: '239',
  },
];

const ProductComponent = () => {
  const [value, setValue] = React.useState<number | null>(5);

  return (
    <Fragment>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',mt: 1,}}>
        <Grid container sx={{ maxWidth: 1200, display: 'flex', margin: 'auto' }}>
          <Grid xs={12}>
            <Typography
              sx={{ textTransform: 'uppercase', width: '100%', display: 'flex', justifyContent: 'center' }}
              variant="h6"
            >
              Çok Satanlar
            </Typography>
          </Grid>
          {ProductCard.map((item) => {
            const oldPrice = parseFloat(item.oldprice); 
            const newPrice =
              item.discount !== undefined
                ? (oldPrice - oldPrice * (parseFloat(item.discount) / 100)).toFixed(2)
                : oldPrice.toFixed(2);
            return (
              <Grid item xs={6} sm={6} md={2} sx={{ p: 1, mt: 2 }} key={item.name}>
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <img src={item.img} alt={item.name} />
                  {item.discount && (
                    <Box sx={{ position: 'absolute', top: -20, right: 0, width: 'auto', backgroundColor: 'red' }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          sx={{ fontSize: '1.1rem', color: 'white', display: 'flex', justifyContent: 'center' }}
                          variant="button"
                        >
                          %{item.discount}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '0.8rem', color: 'white', display: 'flex', justifyContent: 'center', m: 0, p: 0 }}
                        >
                          İndirim
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Typography sx={{ fontWeight: '600', mx: 'auto' }} variant="button">
                    {item.name}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <Typography sx={{ mx: 'auto', textAlign: 'center' }} variant="body2">
                    {item.description}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Box>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(_event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} variant="body2">
                    {item.comment}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: item.discount ? 'red' : 'inherit',
                        textDecoration: item.discount ? 'line-through' : 'none',
                      }}
                      variant="body1"
                    >
                      {oldPrice.toFixed(2)} TL
                    </Typography>
                    {item.discount && (
                      <Typography sx={{ display: 'flex', justifyContent: 'center', ml: 1 }} variant="body1">
                        {newPrice} TL
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ProductComponent;
