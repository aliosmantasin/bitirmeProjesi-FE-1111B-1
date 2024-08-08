import { Grid, InputBase, Typography, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const CustomTypography = styled(Typography)`
  background-color: #919191;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 80px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

const TextFieldNav = () => {
  return (
    <Grid 
      sx={{
        mx: { xs: '10px', sm: '10px', md: '10px' },
        display: 'flex',
        alignItems: 'center',
        width: 396,
        height: 42
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          border: { xs:"none", sm:"2px solid #919191"},
          padding: "10px",
          borderTopLeftRadius: {xs :"20px", sm:"5px"} ,
          borderBottomLeftRadius: {xs :"20px", sm:"5px"},
          borderTopRightRadius: {xs :"20px", sm:"0"} ,
          borderBottomRightRadius: {xs :"20px", sm:"0"},
          height: 42,
          backgroundColor: {xs:"#f7f7f7", sm:"none"},
        }}
        placeholder="Aradığınız ürünü yazınız"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <CustomTypography variant='button' display="block">ara</CustomTypography>
    </Grid>
  );
};

export default TextFieldNav;
