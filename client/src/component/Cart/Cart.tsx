import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AddToCartEdge from '../layout/Navbar/add/AddToCartEdge';
import { Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import TestImg from '../../assets/image/product/WheyProtein.jpeg'
import { CustomButtonBox } from '../ProductDetailPage/AddToCart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CustomBox = styled(Box)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const CustomImg = styled("img")`
  width: 90px;
`;

const CustomGrid = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 50%;

`

type Anchor = 'right';
export default function CartPage() {

  const [state, setState] = React.useState({ // Mui Anchor Component 
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

      const [count, setCount] = React.useState(1); // Counter 

      const handleIncrease = () => {
          setCount(prevCount => prevCount + 1);
      };

      const handleDecrease = () => {
          setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 0)); // Set count to 0 if it would go below 1
      };

  const list = (anchor: Anchor) => (
    <Grid  container direction="column" justifyContent="space-between"  height="100vh"  sx={{ width: { xs: "350px", sm: "400px"}, alignItems:"center", backgroundColor:"#fbf9f9"}} role="presentation" onClick={toggleDrawer(anchor, true)}>

      <Grid sx={{width:"100%"}}>
      <List>
        <ListItem key="" disablePadding>
          <Typography sx={{ width: "100%", fontWeight: "bold", textAlign: "center", p: 1 }}>SEPETİM</Typography>
        </ListItem>
      </List>

      <Divider />

      {/* Conditional rendering koşullu ifade, eğer  */}
      {count > 0 ? (
        <Grid p={2} mb={1} key="" sx={{ cursor: "pointer", backgroundColor: "#fbf9f9",boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
          <Grid sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Grid gap={1} sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomImg src={TestImg} alt="" />
              </Box>
              <Grid container direction="column" justifyContent="flex-start">
                <Typography sx={{ fontWeight: "bold", lineHeight: "2" }} variant='caption' display="block">COLLAGEN</Typography>
                <Typography variant='caption' display="block" sx={{ lineHeight: "2" }}>Ahududu</Typography>
                <Typography variant='caption' display="block" sx={{ lineHeight: "2" }}>250g</Typography>
              </Grid>
            </Grid>

            <Grid container direction="column" justifyContent="start" alignItems="flex-end">
              <Typography sx={{ fontWeight: "bold", display: "flex", justifyContent: "end" }}>499TL</Typography>
              <CustomBox mt={2} p={0.3} sx={{ width: "100px", display: "flex", justifyContent: "space-between", backgroundColor: "white", border: "1px solid #e8e8e8" }}>
                <Button onClick={handleDecrease} sx={{ p: 0, m: 0, minWidth: "auto" }}><DeleteOutlineIcon /></Button>
                <Typography>{count}</Typography>
                <Button onClick={handleIncrease} sx={{ p: 0, m: 0, minWidth: "auto" }}><AddIcon /></Button>
              </CustomBox>
            </Grid>
          </Grid>
        </Grid>

        
        
      ) : (
        <CustomGrid >Sepetinizde Ürün Bulunmamaktadır</CustomGrid>
      )}
        </Grid>

     

          <Grid p={2} sx={{width:"100%", backgroundColor:"white"}}>
            <Typography m={1} sx={{display:"flex", justifyContent:"flex-end", fontWeight:"600"}}>TOPLAM 499 TL </Typography>
          <CustomButtonBox><Button><Typography sx={{fontWeight:"600", color:"white", display:"flex", justifyContent:"center"}}>DEVAM ET <ArrowRightIcon/></Typography></Button></CustomButtonBox>
          </Grid>

          
    </Grid>
  );

  return (
    <div>
      <Button sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", border: { xs: "none", sm: "1px solid #dbdbdb" } }} onClick={toggleDrawer("right", true)}>
        <Box>
          <AddToCartEdge />
        </Box>
        <Typography variant='button' sx={{ color: "#222222", mx: "2px", display: { xs: "none", sm: "block" } }}>SEPET</Typography>
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
