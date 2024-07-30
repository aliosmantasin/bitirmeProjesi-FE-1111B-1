import { Box, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import ProductDetail from '../component/ProductDetailPage/ProductDetail'
import ProductImg from '../component/ProductDetailPage/ProductImg'
import ProductComponent from '../component/Product/Product'
import { ProductObje } from '../component/Product/ProductCard';
import RateOfComment from '../component/Comment/RateOfComment'

const ProductDetailPage = () => {

  return (

    <Fragment>
    <Box component="section" sx={{ p: 2}}>
    <Grid container sx={{display:"flex", justifyContent:"center", gap:{xs:5, sm:10, md:15}}}>
        <ProductImg/>   
        <ProductDetail/>
    </Grid>
    <Grid container width="100" mt={4} sx={{display:"block"}}>
      <Typography sx={{display:"flex",justifyContent:"center", fontSize:"1.3rem"}} variant='button'>SON GÖRÜNTÜLENEN ÜRÜNLER</Typography>
    <ProductComponent products={ProductObje} />
    </Grid>
    <RateOfComment/>
    </Box> 

    </Fragment>
  )
}

export default ProductDetailPage