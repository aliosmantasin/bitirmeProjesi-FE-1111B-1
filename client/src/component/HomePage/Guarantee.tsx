import { Grid, Typography, Rating, Box } from '@mui/material';
import React from 'react';

const Guarantee = () => {
    const [value, setValue] = React.useState<number | null>(5);
  return (
    <Box component="section">
      <Grid container sx={{backgroundColor:"#222222" }}>
        <Grid item maxWidth="lg" sx={{display:{xs:"block", sm:"flex"},flexWrap:"wrap",margin:"auto auto 3rem auto", p:1,justifyContent:{xs:"auto", sm:"space-evenly", md:"space-between"}}}>
      
        <Grid item sx={{width:"100%"}} my="1rem">
       
        <Box gap={2} sx={{display:"flex", alignItems:"center", p:{xs:"1rem", sm:"0"}}}>   
           
           <Rating name="half-rating-read" value={value} onChange={(_event, newValue) => {
             setValue(newValue);
           }} readOnly />
           
              <Typography variant='body2' sx={{color:"white"}}>(140.000+)</Typography>
          </Box>
     
       
        </Grid>

        <Grid item gap={5} sx={{display:"flex",flexWrap:"wrap",width:"100%", p:{xs:"1rem", sm:"0"}}}>
        <Grid item xs={12} sm={5} sx={{}}>

            <Typography variant='button' display="block" sx={{ textAlign: "start", fontSize: "1.6rem",color:"white" }}>
              LABORATUVAR TESTLİ ÜRÜNLER
              AYNI GÜN & ÜCRETSİZ KARGO
              MEMNUNİYET GARANTİSİ
            </Typography>
          </Grid>
       
          <Grid item xs={12} sm={4}  sx={{ }}>
              <Typography variant="body1" display="block" sx={{ textAlign:"start",fontSize: "1.2rem", color:"white" }}>
                200.000'den fazla ürün yorumumuza dayanarak,
                ürünlerimizi seveceğinize eminiz. Eğer herhangi
                bir sebeple memnun kalmazsan, bizimle iletişime
                geçtiğinde çözüme kavuşturacağız.
              </Typography>
            </Grid>
        
        </Grid>
        </Grid>
      </Grid>
      </Box>
  );
}

export default Guarantee;
