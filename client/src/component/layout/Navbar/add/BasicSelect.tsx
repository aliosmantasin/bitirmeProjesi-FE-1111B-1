import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Typography} from '@mui/material';
import styled from '@emotion/styled';


export default function BasicSelectNav() {



  const CustomFormControl = styled(FormControl)`
  width: 135px;
  height: 46px;
  margin: 0;

 @media (max-width:768px){
  width: 115px;
 }
  `


  return (
    <Grid sx={{display:"flex"}}>
   
    <Box sx={{ mx:{ xs: '10px', sm: '10px', md: '10px'}, border:"1px solid #919191", borderRadius:"5px"   }}>
      <CustomFormControl>
      <Select
      sx={{height:46}}
      defaultValue=""
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      renderValue={(selected) => {
        if (selected === "") {
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon />
              <Typography sx={{marginLeft:{sx:0, sm:0, md:2}}}>HESAP</Typography>
            </Box>
          );
        }
        return selected;
      }}
    >
      <MenuItem value="Giriş Yap">Giriş</MenuItem>
      <MenuItem value="Kayıt Ol">Kayıt Ol</MenuItem>
    </Select>

      </CustomFormControl>
    </Box>
    </Grid>
  );
}
