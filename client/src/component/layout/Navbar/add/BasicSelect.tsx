import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import { Grid} from '@mui/material';
import styled from '@emotion/styled';


export default function BasicSelectNav() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const CustomFormControl = styled(FormControl)`
  width: 100%;
 
  margin: 0;
  padding: 0;
  `

  const CustomInputLabel = styled(InputLabel)`
  display: flex;
  align-items: center;
  width: 75%;
  margin: 0!important;
  padding: 0!important;

  `
 
  return (
    <Grid sx={{display:"flex"}}>
      <Box sx={{color:"#919191", display:"flex", alignItems:"center"}}><PersonIcon/></Box>
    <Box sx={{ minWidth: 150, mx:{ xs: '10px', sm: '10px', md: '10px' }  }}>
      <CustomFormControl>
        <CustomInputLabel id="demo-simple-select-label">Hesap</CustomInputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Hesap"
          onChange={handleChange}
          sx={{p:0, m:0}}
        >
             <MenuItem value={10}>Üye Girişi</MenuItem>
             <MenuItem value={20}>Üye Ol</MenuItem>
        </Select>
      </CustomFormControl>
    </Box>
    </Grid>
  );
}
