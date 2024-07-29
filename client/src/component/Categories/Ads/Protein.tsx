import { Button, Grid, Typography } from "@mui/material";
import ProteinCategories from "../../../assets/image/ProteinCategories.jpeg"
import styled from '@emotion/styled';
// Sİl

const CustomImg = styled("img")`
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 20px;
`

const CustomTypographt = styled(Typography)({
  fontWeight:600,
  fontSize:"1.2rem",
  position: "absolute",
  top: '50%',
  right: '0',
  transform: 'translate(-50%, -50%)',
});

const CustomButton = styled(Button)({
  position: "absolute",
  top: '70%',
  right: '0',
  transform: 'translate(-50%, -50%)',
});


const Protein = () => {
  return (
    <>
      <Grid sx={{display:"flex", position:"relative", width:"100%"}}>
        <CustomImg src={ProteinCategories} alt="Protein Categories"/>
        <CustomTypographt variant="button" >Protein</CustomTypographt>
        <CustomButton sx={{backgroundColor:"#222222"}} variant="contained">incele</CustomButton>
      </Grid>
    </>
  )
}

export default Protein