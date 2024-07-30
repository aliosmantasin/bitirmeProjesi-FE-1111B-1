import { Grid, Button, Divider, Rating, Typography, Box  } from '@mui/material';
import React from 'react'


const ProductTitle = () => {
    const [value, setValue] = React.useState<number | null>(4);

  return (
 
    <>
    <Grid >
        <Typography variant='button' sx={{fontSize:"1.8rem"}}>WHEY PROTEIN</Typography>
        <Typography sx={{ textTransform: "uppercase" }}>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</Typography>
        <Box gap={1} sx={{display:"flex"}}>

        <Rating name="half-rating-read"  value={value}  onChange={(event, newValue) => {
          setValue(newValue);
        }} readOnly />
       
        <Typography sx={{fontWeight:"600"}}>10869 Yorum</Typography>
        </Box>
        <Box>
                <Button sx={{m:1}} variant="contained" disabled>
                    VEJETERYAN
                </Button>
                <Button sx={{m:1}} variant="contained" disabled>
                    GLUTENSİZ
                </Button>
        </Box>

        <Divider sx={{my:1}}/>
     
    </Grid>
    </>
  )
}

export default ProductTitle