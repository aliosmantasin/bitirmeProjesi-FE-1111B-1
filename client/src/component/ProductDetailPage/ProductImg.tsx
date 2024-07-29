
import Whey from "../../assets/image/product/WheyProtein.jpeg"
import styled from '@emotion/styled';
import { Grid } from '@mui/material';


const ProductImg = () => {

    const CustomImg = styled("img")`
    max-width: 350px;
    width: 350px;
    object-fit: contain;
    @media (max-width: 1420px){
        width: 300px
    }
    @media (max-width: 600px){
        width: 350px;
        display: flex;
        margin: auto;
    }
   `


  return (
   <>
    <Grid item xs={12} sm={4} md={2}>
        <CustomImg src={Whey} />
    </Grid>
   </>
  )
}

export default ProductImg