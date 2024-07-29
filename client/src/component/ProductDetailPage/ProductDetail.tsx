import { Grid } from "@mui/material"
import ProductProperty from "./ProductProperty"
import ProductTitle from "./ProductTitle"
import ProductSize from "./ProductSize"


const ProductDetail = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <ProductTitle/>
    <ProductProperty/>
    <ProductSize/>
    </Grid>
  )
}

export default ProductDetail