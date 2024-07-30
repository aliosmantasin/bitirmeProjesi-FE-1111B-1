import { Grid } from "@mui/material"
import ProductProperty from "./ProductProperty"
import ProductTitle from "./ProductTitle"
import ProductSize from "./ProductSize"
import AddToCart from "./AddToCart"
import HappyCustomer from "./HappyCustomer"
import ProductAccordion from "./ProductAccordion"


const ProductDetail = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <ProductTitle/>
    <ProductProperty/>
    <ProductSize/>
    <AddToCart/>
    <HappyCustomer/>
    <ProductAccordion/>
    </Grid>
  )
}

export default ProductDetail