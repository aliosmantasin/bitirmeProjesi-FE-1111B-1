import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TestImg from '../assets/image/product/CREAM OFRICE.jpeg';
import styled from '@emotion/styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomImg = styled('img')`
  width: 150px;
`;

const CustomBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AccountPage() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
      <Grid item my={4} sx={{ display: { xs: 'block', sm: 'flex', md: 'flex' }, justifyContent: 'space-around'}}>
        <Grid item xs={12} sm={3} md={2} sx={{ mx: { xs: '1rem', md: 'auto' }}}>
          <Grid item>
          
            <Typography
              sx={{
                fontWeight: '800',
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: isMobileDown ? 'center' : 'start', // Mobilde ortalama
                textAlign: 'center', // Mobilde ortalama
              }}
            >
              Hesabım
            </Typography>
          </Grid>
          <Tabs
          
            orientation={isMobileDown ? 'horizontal' : 'vertical'}
            // value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{display: 'flex'}}
            centered={true}
          >
            <Tab
              icon={<PersonIcon />}
              iconPosition="start"
              label="Hesap Bilgilerim"
              {...a11yProps(0)}
              sx={{ display: "flex",
                justifyContent:'start',
                m: 0,
                p:{xs:0, sm:0},
                textTransform:"none",
                fontSize:{sx:"0.8rem", sm:"1rem"}
              
            }}
            />
            <Tab
              icon={<ListAltIcon />}
              iconPosition="start"
              label="Siparişlerim"
              {...a11yProps(1)}
              sx={{ display: "flex",
                justifyContent:'start',
                m: 0,
                p:{xs:2, sm:0},
                fontSize:{sx:"0.8rem", sm:"1rem"},
                textTransform:"none"
             }}
            />
            <Tab
              icon={<LocationOnIcon />}
              iconPosition="start"
              label={isMobileDown ? '' : 'Adreslerim'}
              {...a11yProps(2)}
              sx={{
                display: "flex",
                justifyContent:'start',
                m: 0,
                p:{xs:1, sm:0},
                fontSize:{sx:"0.8rem", sm:"1rem"},
                textTransform:"none",
                minWidth: 'auto', //mui komponentinde minWidth:90px
              }}
            />
          </Tabs>
        </Grid>

        <Grid xs={12} sm={8} md={10} item sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mx:{xs:"1rem", sm:"2rem"}}}>
          <Grid xs={12} sm={12} md={7} >
           
            <Grid item sx={{width: '100%' }}>
            
              <Typography sx={{ fontWeight: '600' }}>Sipariş Teslim Edildi</Typography>
              <Typography variant="subtitle2" display="block">
                14 Aralık 2022 Tarihinde Sipariş Verildi - 290405 numaralı sipariş
              </Typography>

              <Divider sx={{my:3}}/>
            </Grid>

            <TabPanel value={value} index={0}>
              <Grid gap={3} my={1} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CustomImg src={TestImg} alt="" />
                </Box>
                <Grid container direction="column" justifyContent="flex-start">
                  <Typography sx={{ fontWeight: 'bold', lineHeight: '2' }} variant="subtitle1" display="block">
                    COLLAGEN
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    Ahududu
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    250g
                  </Typography>
                </Grid>
              </Grid>

              <Grid gap={3} my={1} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CustomImg src={TestImg} alt="" />
                </Box>
                <Grid container direction="column" justifyContent="flex-start">
                  <Typography sx={{ fontWeight: 'bold', lineHeight: '2' }} variant="subtitle1" display="block">
                    COLLAGEN
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    Ahududu
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    250g
                  </Typography>
                </Grid>
              </Grid>

              <Grid gap={3} my={1} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CustomImg src={TestImg} alt="" />
                </Box>
                <Grid container direction="column" justifyContent="flex-start">
                  <Typography sx={{ fontWeight: 'bold', lineHeight: '2' }} variant="subtitle1" display="block">
                    COLLAGEN
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    Ahududu
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ lineHeight: '2' }}>
                    250g
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              Siparişlerim
            </TabPanel>
            <TabPanel value={value} index={2}>
              Adreslerim
            </TabPanel>
            <Divider sx={{my:2}}/>
            <Grid item gap={3} sx={{ display: 'flex', width: '100%'}}>
   
              <Typography>hepsiJet</Typography>
              <Typography>Taki Numarası:</Typography>
              <Typography>HJ2192904051</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={3} sx={{mt:{sm:"auto", md:6}, backgroundColor: 'white' }}>
          <Divider sx={{my:{xs:1, md:3},mt:{xs:10, md:3}}}/>
            <Grid item>
              <Typography sx={{fontWeight:"500"}}>Adress</Typography>
              <Typography>Uğur İLTER</Typography>
              <Typography sx={{ textDecoration: 'underline' }}>
                Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746 Ataşehir/İstanbul
              </Typography>
            </Grid>
            <Divider sx={{my:2}}/>
            <Grid item>
              <Typography>Ödeme</Typography>
              <Typography>Kredi Kartı - 770 TL</Typography>
              <Typography>**** **** **** **61</Typography>
            </Grid>
            <Divider sx={{my:1}}/>
            <Grid>
              <Box>
                <Typography sx={{ fontWeight: '500' }}>Özet</Typography>
              </Box>

              <CustomBox>
                <Typography>Ara Toplam</Typography>
                <Typography>856 TL</Typography>
              </CustomBox>

              <CustomBox>
                <Typography>Kargo</Typography>
                <Typography>0</Typography>
              </CustomBox>

              <CustomBox>
                <Typography>Toplam Vergi</Typography>
                <Typography>8 TL</Typography>
              </CustomBox>

              <CustomBox>
                <Typography>Yüzde 10 indirim!</Typography>
                <Typography>-86 TL</Typography>
              </CustomBox>

              <CustomBox>
                <Typography>Toplam</Typography>
                <Typography>770TL</Typography>
              </CustomBox>
              <Divider sx={{my:2}}/>
              <Box>
                <Typography sx={{fontWeight:"500"}} variant="button" display="block">
                  Yardıma mı ihtiyacın var?
                </Typography>
                <Typography sx={{fontWeight:"500"}}>Sıkça Sorulan Sorular</Typography>
                <Typography sx={{fontWeight:"500"}}>Satış Sözleşmesi</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
