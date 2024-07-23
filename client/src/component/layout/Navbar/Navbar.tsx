import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import {Grid, Typography} from '@mui/material';
import TextFieldNav from './add/TextField';
import BasicSelectNav from './add/BasicSelect';
import AddToCartEdge from './add/AddToCartEdge';
import Logo from './add/Logo';
import './Navbar.css'
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import HttpsIcon from '@mui/icons-material/Https';


interface Props {
  window?: () => Window;
}

const drawerWidth = '75%';

const navItems = [
  { name: 'PROTEİN', path: '/protein' },
  { name: 'SPOR GIDALARI', path: '/spor-gidalari' },
  { name: 'SAĞLIK', path: '/saglik' },
  { name: 'GIDA', path: '/gida' },
  { name: 'VİTAMİN', path: '/vitamin' },
  { name: 'TÜM ÜRÜNLER', path: '/tum-urunler' },
];

const navAdd = [
  { name: 'HESABIM', path: '/hesabim' },
  { name: 'MÜŞTERİ YORUMLARI', path: '/musteri-yorumlari' },
  { name: 'İLETİŞİM', path: '/iletisim' },
];



const DrawerListItemButton = styled(ListItemButton)`
  display: flex;
  justify-content: space-between;
`;

const CustomToolbar = styled(Toolbar)`
  padding: 0 !important;
  background-color: #222222 !important;
  min-height: 35px !important;
  height: 35px !important;

  @media (max-width: 960px) {
    background-color: #fff !important;
    min-height: 35px !important;
    height: 35px !important;
  } 

  @media (max-width: 600px) {
    background-color: #fff !important;
    min-height: 35px !important;
    height: auto !important;
  }

`;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <List sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, justifyContent: { md: 'space-between' } }}>
        {navItems.map((item) => ( 
          <Link to={item.path} style={{color:"#222222",textDecoration:"none"}}>
          <ListItem key={item.name} disablePadding>
            <DrawerListItemButton>
              <ListItemText primary={item.name} />
              <ArrowForwardIosIcon />
            </DrawerListItemButton>
          </ListItem>
          </Link>
        ))}


        {navAdd.map((item) => (
          <Link to="#" style={{ color: "#222222", textDecoration: "none" }}>
            <ListItem key={item.name} disablePadding sx={{backgroundColor:"#e5e5e5"}}>
              <DrawerListItemButton>
                <ListItemText primary={item.name} />
                <ArrowForwardIosIcon />
              </DrawerListItemButton>
            </ListItem>
          </Link>
        ))}

      </List>
    </Box>
  );
  


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
  
      <AppBar component="nav" sx={{maxHeight:"auto", height:{xs:"auto", sm:"auto"}}}>
      <Grid container sx={{display:{xs:"none", sm:"flex", md:"flex"}, justifyContent:"space-evenly",alignItems:"center", width:"100%",height:"120px", backgroundColor:"white"}}>
            <Grid item xs={2} md={1}>
                <Logo/>
            </Grid>
          <Grid item xs={8} md={8} sx={{display:"flex", justifyContent:"space-evenly"}}>
              <TextFieldNav />
              <BasicSelectNav/>
            <Button sx={{ display: "flex", justifyContent: "center", alignItems: "center", width:"100px" ,border:"1px solid #919191",}}>
              <AddToCartEdge/>
            </Button>

          </Grid>
      </Grid>
        <CustomToolbar >
        <Grid sx={{ width:"100%", backgroundColor: { sm:"#222222", md:"#222222"}}}>
          <Grid sx={{display:{xs:"flex", sm:"flex", md:"none"}, justifyContent:"space-evenly", width:"100%", my:{xs:"1rem", sm:"auto"}}}> 
          <IconButton // İlk Toolbar
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: {xs:"flex", sm: 'none',md:"none"}, color:"#222222" }} //Toggle
          >
            <MenuIcon />
          </IconButton>

          <Grid sx={{ display:{xs:"flex", sm:"none", md:"none"},maxWidth:"100px", width:"100px" }}>
             <Logo/>
          </Grid>

          <Box sx={{display:{xs:"flex", sm: 'none',md:"none"}, justifyContent:"center", alignItems:"center"}}>
          <AddToCartEdge/>
          </Box> 
          </Grid>
          <Grid container sx={{ display: { xs: 'none',sm:"flex", md: 'flex' }, justifyContent:"space-evenly"}}> 
            {navItems.map((item) => ( //
              <Button key={item.name} sx={{color:"white"}}>
                {item.name}
              </Button>
            ))}
          </Grid>
          
          <Grid sx={{width:"100%", display:{xs:"flex", sm:"none"}, justifyContent:"center", marginBottom:"1rem"}}> 
                <TextFieldNav/>
          </Grid>
          
          </Grid>
          
        </CustomToolbar>
          <Grid  sx={{ display:{xs:"none", sm:"flex"}, justifyContent:"space-evenly", backgroundColor:"white", color:"#222222", height:"45px"}}> 
             <Box sx={{display:"flex", alignItems:"center"}}><LocalShippingIcon/><Typography variant='subtitle1' sx={{fontWeight: 600, ml:1, display:"flex", alignItems:"center"}}>Aynı Gün Kargo</Typography><Typography variant='subtitle1' sx={{ml:1, display:"flex", alignItems:"center"}}>16:00'dan Önceki Siparişlerde</Typography></Box>  
             <Box sx={{display:"flex", alignItems:"center"}}><SentimentSatisfiedAltIcon/><Typography variant='subtitle1' sx={{fontWeight: 600, ml:1, display:"flex", alignItems:"center"}}>Ücretsiz Kargo</Typography><Typography variant='subtitle1' sx={{ml:1, display:"flex", alignItems:"center"}}>100₺ Üzeri Siparişlerde</Typography></Box>  
             <Box sx={{display:"flex", alignItems:"center"}}><HttpsIcon/><Typography variant='subtitle1' sx={{fontWeight: 600, ml:1, display:"flex", alignItems:"center"}}>Güvenli Alışveriş</Typography><Typography variant='subtitle1' sx={{ml:1, display:"flex", alignItems:"center"}}>1.000.000+ Mutlu Müşteri</Typography></Box>  
 
          </Grid>
      </AppBar> 
      <nav>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{marginTop:{xs:"77px", sm:"137px"}}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
