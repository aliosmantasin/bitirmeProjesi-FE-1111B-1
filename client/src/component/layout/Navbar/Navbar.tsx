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
import Logo from './add/Logo';
import './Navbar.css'
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import HttpsIcon from '@mui/icons-material/Https';
import CartPage from '../../Cart/Cart';


interface Props {
  window?: () => Window;
}

const drawerWidth = '75%';

const navItems = [
  { name: 'PROTEİN', path: 'protein' },
  { name: 'SPOR GIDALARI', path: 'sporgidalari' },
  { name: 'SAĞLIK', path: 'saglik' },
  { name: 'GIDA', path: 'gida' },
  { name: 'VİTAMİN', path: 'vitamin' },
  { name: 'TÜM ÜRÜNLER', path: 'tumurunler' },
];

const navAdd = [
  { name: 'HESABIM', path: 'hesabim' },
  { name: 'MÜŞTERİ YORUMLARI', path: 'musteri-yorumlari' },
  { name: 'İLETİŞİM', path: 'iletisim' },
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
    //Mobil Menu Settings
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, justifyContent: { md: 'space-between' } }}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} style={{ color: "#222222", textDecoration: "none" }}>
            <ListItem disablePadding>
              <DrawerListItemButton>
                <ListItemText primary={item.name} />
            
                <ArrowForwardIosIcon />
              </DrawerListItemButton>
            </ListItem>
          </Link>
        ))}

        {navAdd.map((item) => (
          <Link key={item.name}  to={item.path} style={{ color: "#222222", textDecoration: "none" }}>
            <ListItem disablePadding sx={{ backgroundColor: "#e5e5e5" }}>
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
    <Box component="section" sx={{ display: 'flex' }}>
      <CssBaseline />
  
      <AppBar component="nav" sx={{maxHeight:"auto", height:{xs:"auto", sm:"auto", boxShadow:"none"}}}>
        <Grid container sx={{ display: { xs: "none", sm: "flex", md: "flex" }, justifyContent: "space-evenly", alignItems: "center", width: "100%", height: "100px", backgroundColor: "white" }}>
          <Grid item xs={2} md={3}>
            <Box sx={{ maxWidth: "170px", margin: "auto" }}>
              <Link to="/"><Logo /></Link>
            </Box>
          </Grid>
          <Grid item xs={8} md={8} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <TextFieldNav />
            <BasicSelectNav />
            <CartPage />
          </Grid>
        </Grid>
        <CustomToolbar >
        <Grid sx={{ width:"100%", backgroundColor: { sm:"#222222", md:"#222222"}}}>
          <Grid sx={{display:{xs:"flex", sm:"flex", md:"none"}, justifyContent:"space-evenly",alignItems:"center", width:"100%", my:{xs:"1rem", sm:"auto"}}}> 
          <IconButton // İlk Toolbar
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: {xs:"flex", sm: 'none',md:"none"}, color:"#222222" }} //Toggle
          >
            <MenuIcon />
          </IconButton>

          <Grid sx={{ display:{xs:"block", sm:"none", md:"none"},maxWidth:"120px", width:"100px" }}>
          {/* Mobil Logo */}
         <Link to="/"> <Logo/></Link> 
          </Grid>

          <Box sx={{display:{xs:"flex", sm: 'none',md:"none"}, justifyContent:"center", alignItems:"center"}}>
          <CartPage/>
          {/* Mobil Cart */}
          </Box> 
          </Grid>
          <Grid item  sx={{ display: { xs: 'none',sm:"flex", md: 'flex' }, justifyContent:"space-evenly"}}> 
         
            {navItems.map((item) => ( // Desktop Menu
               <Link to={item.path} key={item.name}>
              <Button key={item.name}  sx={{color:"white"}}>
                {item.name}
              </Button>
              </Link>
            ))}
         
          </Grid>
          
          <Grid sx={{width:"100%", display:{xs:"flex", sm:"none"}, justifyContent:"center", marginBottom:"1rem"}}> 
                <TextFieldNav/>
          </Grid>
          
          </Grid>
          
        </CustomToolbar>
          <Grid  sx={{ display:{xs:"none", sm:"flex"}, justifyContent:"space-evenly",alignItems:"center", backgroundColor:"white", color:"#222222", height:"45px",}}> 
             <Box sx={{display:"flex", alignItems:"center"}}><LocalShippingIcon/><Typography variant='subtitle2' sx={{ ml:1, display:"flex", alignItems:"center", textAlign:"center"}}> <span style={{fontWeight:"600", marginRight:"2px"}}>Aynı Gün Kargo </span> - <span style={{marginLeft:"2px"}}> 16:00'dan Önceki Siparişlerde</span></Typography></Box>  
             <Box sx={{display:"flex", alignItems:"center"}}><SentimentSatisfiedAltIcon/><Typography variant='subtitle2' sx={{ ml:1, display:"flex", alignItems:"center", textAlign:"center"}}> <span style={{fontWeight:"600", marginRight:"2px"}}>Ücretsiz Kargo</span> - <span style={{marginLeft:"2px"}}>100₺ Üzeri Siparişlerde</span></Typography></Box>  
             <Box sx={{display:"flex", alignItems:"center"}}><HttpsIcon/><Typography variant='subtitle2' sx={{ ml:1, display:"flex", alignItems:"center", textAlign:"center"}}> <span style={{fontWeight:"600", marginRight:"2px"}}>Güvenli Alışveriş</span> - <span style={{marginLeft:"2px"}}>1.000.000+ Mutlu Müşteri</span></Typography></Box>  
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
      <Box component="main" sx={{marginTop:{xs:"77px", sm:"116px"}}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
