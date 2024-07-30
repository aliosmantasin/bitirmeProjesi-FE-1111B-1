import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import Logo from '../../../assets/logoWhite.svg';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const info = [
  { name: 'İletişim', path: '#' },
  { name: 'Hakkımızda', path: '#' },
  { name: 'Sıkça Sorulan Sorular', path: '#' },
  { name: 'KVKK', path: '#' },
  { name: 'Çalışma İlkelerimiz', path: '#' },
  { name: 'Satış Sözleşmesi', path: '#' },
  { name: 'Garanti ve İade Koşulları', path: '#' },
  { name: 'Gerçek Müşteri Yorumları', path: '#' },
  { name: 'Blog', path: '#' }
];

const Categories = [
  { name: 'Protein', path: '#' },
  { name: 'Spor Gıdaları', path: '#' },
  { name: 'Sağlık', path: '#' },
  { name: 'Gıda', path: '#' },
  { name: 'Vitamin', path: '#' },
  { name: 'Aksesuar', path: '#' },
  { name: 'Tüm Ürünler', path: '#' },
  { name: 'Paketler', path: '#' },
  { name: 'Lansmana Özel Fırsatlar', path: '#' }
];

const PopulerProduct = [
  { name: 'Whey Protein', path: '#' },
  { name: 'Cream of Rice', path: '#' },
  { name: 'Creatine', path: '#' },
  { name: 'BCAA+', path: '#' },
  { name: 'Pre-Workout', path: '#' },
  { name: 'Fitness Paketi', path: '#' },
  { name: 'Collagen', path: '#' },
  { name: 'Günlük Vitamin Paketi', path: '#' },
  { name: 'ZMA', path: '#' }
];

const Footer = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPopulerProductOpen, setIsPopulerProductOpen] = useState(false);

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
    setIsCategoriesOpen(false);
    setIsPopulerProductOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setIsInfoOpen(false);
    setIsPopulerProductOpen(false);
  };

  const togglePopulerProduct = () => {
    setIsPopulerProductOpen(!isPopulerProductOpen);
    setIsInfoOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <Box component="section"  sx={{display:"block", backgroundColor: "#222222"}}>
    <Grid sx={{ display: { xs: "block", sm: "flex" }, margin: "auto", justifyContent:{xs:"start", sm:"space-evenly"}, p:{ xs: 4, sm: "auto" } }}>
      <Grid item>
        <Box maxWidth="100%">
          <img src={Logo} style={{ maxWidth: "100px" }} />
        </Box>
        <List sx={{ p: 0, m: 0, display: { xs: "none", sm: "block" } }}>
          {info.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ p: 0, m: 0 }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: { xs: "block", sm: "none"},mt:2  }}>
          <Button variant="text" sx={{ color: "white" }} onClick={toggleInfo}><AddIcon /> OJS NUTRITION</Button>
          {isInfoOpen && ( // mobil info
            <List>
              {info.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={{ p: 0, m: 0 }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Grid>

      <Grid item>
        <Box maxWidth="100%">
          <Typography sx={{ fontWeight: "600", color: "white", display: { xs: "none", sm: "block" } }}>Kategoriler</Typography>
        </Box>
        <List sx={{ p: 0, m: 0, display: { xs: "none", sm: "block" } }}>
          {Categories.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ p: 0, m: 0 }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: { xs: "block", sm: "none" }, mt:2}}>
          <Button variant="text" sx={{ color: "white" }} onClick={toggleCategories}><AddIcon />KATEGORİLER</Button>
          {isCategoriesOpen && ( // mobil Categories
            <List>
              {Categories.map((Categories) => (
                <ListItem key={Categories.name} disablePadding>
                  <ListItemButton sx={{ p: 0, m: 0 }}>
                    <ListItemText primary={Categories.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Grid>

      <Grid item>
        <Box maxWidth="100%">
          <Typography sx={{ fontWeight: "600", color: "white", display: { xs: "none", sm: "block" } }}>Populer Ürünler</Typography>
        </Box>
        <List sx={{ p: 0, m: 0, display: { xs: "none", sm: "block" } }}>
          {PopulerProduct.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ p: 0, m: 0 }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: { xs: "block", sm: "none" }, mt:2 }}>
          <Button variant="text" sx={{ color: "white" }} onClick={togglePopulerProduct}><AddIcon />POPULER ÜRÜNLER</Button>
          {isPopulerProductOpen && ( // mobil PopulerProduct
            <List>
              {PopulerProduct.map((PopulerProduct) => (
                <ListItem key={PopulerProduct.name} disablePadding>
                  <ListItemButton sx={{ p: 0, m: 0 }}>
                    <ListItemText primary={PopulerProduct.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Grid>
    </Grid>

      <Grid container maxWidth="1080px" sx={{display:"flex", justifyContent:"center", margin:"auto"}}>
        <Typography variant='caption'>Copyright © - Tüm Hakları Saklıdır.</Typography>
      </Grid>

    </Box>
    
  );
}

export default Footer;
