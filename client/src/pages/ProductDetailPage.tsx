import { Box, Button, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import ProductDetail from '../component/ProductDetailPage/ProductDetail'
import ProductImg from '../component/ProductDetailPage/ProductImg'
import ProductComponent from '../component/Product/Product'
import { ProductObje } from '../component/Product/ProductCard';
import RateOfComment from '../component/Comment/RateOfComment'
import CustomerCommentCard from '../component/Comment/CustomerComent/CustomerCommentCard'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom'

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
    <CustomerCommentCard/>
    <Grid container width="100" mt={4} sx={{display:"block"}}>
      <Typography sx={{display:"flex",justifyContent:"center", fontSize:"1.3rem"}} variant='button'>ÇOK SATANLAR</Typography>
    <ProductComponent products={ProductObje} />
    <Button variant='contained' sx={{display:"flex", justifyContent:"center", margin:"auto", backgroundColor:"#2226ac"}}>TÜMÜNÜ GÖR</Button>
    </Grid>
    <Grid maxWidth="lg" mt={5} sx={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"start", color:"#2226ac",mx:"auto"}}>
          <Link to="#" style={{textDecoration:"none", textTransform:"uppercase", color:"#2226ac"}}>OJS Nutrition</Link> <ArrowRightIcon/> <Link to="#" style={{textDecoration:"none", textTransform:"uppercase", color:"#2226ac"}}>Protein</Link> <ArrowRightIcon/> <Link to="#" style={{textDecoration:"none", textTransform:"uppercase", color:"#2226ac"}}>Proteinler</Link> <ArrowRightIcon/> <Link to="#" style={{textDecoration:"none", textTransform:"uppercase", color:"#2226ac"}}>Whey Protein</Link> 
    </Grid>

    </Box> 

    </Fragment>
  )
}

export default ProductDetailPage