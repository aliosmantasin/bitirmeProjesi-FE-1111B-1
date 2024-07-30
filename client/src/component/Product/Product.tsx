import React from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';

interface Product {
  name: string;
  path: string;
  img: string;
  description: string;
  comment: string;
  oldprice: string;
  discount?: string;
}

interface ProductComponentProps {
  products: Product[];
}

const ProductComponent: React.FC<ProductComponentProps> = ({ products }) => {
  const [value, setValue] = React.useState<number | null>(5);

  return (
      <Box component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, p:2 }}>
        <Grid item container maxWidth="lg" sx={{display: 'flex', margin: 'auto' }}>
          {/* <Grid item xs={12}>
            <Typography sx={{ textTransform: 'uppercase', width: '100%', display: 'flex', justifyContent: 'center' }} variant="h6">
              Çok Satanlar
            </Typography>
          </Grid> */}
          {products.map((item) => {
            const oldPrice = parseFloat(item.oldprice); 
            const newPrice = item.discount ? (oldPrice - oldPrice * (parseFloat(item.discount) / 100)).toFixed(2) : oldPrice.toFixed(2);
            return (
              <Grid item xs={6} sm={4} md={2} sx={{ p: 1, mt: 2 }} key={item.name}>
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <img src={item.img} alt={item.name} />
                  {item.discount && (
                    <Box sx={{ position: 'absolute', top: -20, right: 0, width: 'auto', backgroundColor: 'red' }}>
                      <Box sx={{ p: 1 }}>
                        <Typography sx={{ fontSize: '1.1rem', color: 'white', display: 'flex', justifyContent: 'center' }} variant="button">
                          %{item.discount}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: 'white', display: 'flex', justifyContent: 'center', m: 0, p: 0 }}>
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
                    <Rating name="half-rating-read" value={value} onChange={(event, newValue) => {
                      setValue(newValue);
                    }} readOnly />
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
  );
};

export default ProductComponent;
