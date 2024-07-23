import { IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const TextFieldNav = () => {
  return (
    <Paper
    component="form"
    sx={{mx: { xs: '10px', sm: '10px', md: '10px' } , display: 'flex', alignItems: 'center', width: 400 }}
  >

    <InputBase
    
      sx={{ ml: 1, flex: 1,  }}
      placeholder="Aradığınız ürünü yazınız"
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}

export default TextFieldNav