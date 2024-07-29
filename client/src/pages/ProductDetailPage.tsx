import { Box, Grid } from '@mui/material'
import { Fragment } from 'react'
import ProductDetail from '../component/ProductDetailPage/ProductDetail'
import ProductImg from '../component/ProductDetailPage/ProductImg'


const ProductDetailPage = () => {

  return (

    <Fragment>
    <Box component="section" sx={{ p: 2}}>
    <Grid container sx={{display:"flex", justifyContent:"center", gap:{xs:5, sm:10, md:15}}}>
        <ProductImg/>   
        <ProductDetail/>
    </Grid>
    </Box> 

    </Fragment>
  )
}

export default ProductDetailPage