import { Grid, Typography, CardContent, Rating, Box } from '@mui/material';
import React from 'react';

const Guarantee = () => {
    const [value, setValue] = React.useState<number | null>(5);
  return (

      <Grid container sx={{backgroundColor:"#222222" }}>
        <Grid item maxWidth="lg" sx={{display:{xs:"block", sm:"flex"},margin:"auto", p:1,justifyContent:{xs:"auto", sm:"space-evenly", md:"space-between"}}}>
        <Grid item xs={12} sm={4}>

             <CardContent>
             <Box gap={2} sx={{display:"flex", alignItems:"center"}}>   
            
             <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                />
                 <Typography variant='body2'>(140.000+)</Typography>
             </Box>
              <Typography variant='button' display="block" sx={{ textAlign:"start",fontSize:"1.1rem" }}>
                          LABORATUVAR TESTLİ ÜRÜNLER
                          AYNI GÜN & ÜCRETSİZ KARGO
                          MEMNUNİYET GARANTİSİ
              </Typography>
            </CardContent>
       
        </Grid>

        <Grid item xs={12} sm={6}>
       
           <CardContent>
              <Typography variant="body1" display="block" sx={{ textAlign:"start",}}>
                200.000'den fazla ürün yorumumuza dayanarak,
                ürünlerimizi seveceğinize eminiz. Eğer herhangi
                bir sebeple memnun kalmazsan, bizimle iletişime
                geçtiğinde çözüme kavuşturacağız.
              </Typography>
            </CardContent>
        
        </Grid>
        </Grid>
      </Grid>
  
  );
}

export default Guarantee;
