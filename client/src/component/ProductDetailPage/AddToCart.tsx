import { Box, Button, Grid, Typography } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from "@emotion/styled";
import { useState } from "react";

const CustomBox = styled(Box)`
  border-right: 1px solid #dddddd;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dddddd;
`;


export const CustomButtonBox = styled(Button)`
    background-color: #000000;
    width: 100%;
    display: flex;
    border-radius: 5px;
    justify-content: center;
`
export const CustomButton = styled(Button)`
    min-width: 100%;
    height: 100%;
`;

const AddToCart: React.FC = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    return (
        <>
            <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" sx={{ fontSize: "2rem" }}>549 TL</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>24.31 TL /Servis</Typography>
            </Grid>
            <Grid item gap={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Grid item width={122} height={50} sx={{ border: "1px solid #dddddd", borderRadius: "5px", display: "flex" }}>
                        <CustomBox>
                            <CustomButton onClick={handleDecrease}><RemoveIcon /></CustomButton>
                        </CustomBox>
                        <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #dddddd", borderLeft: "1px solid #dddddd" }}>
                            <Typography sx={{ fontSize: "1.3rem" }}>{count}</Typography>
                        </Box>
                        <CustomBox>
                            <CustomButton onClick={handleIncrease}><AddIcon /></CustomButton>
                        </CustomBox>
                    </Grid>
                </Box>
                <CustomButtonBox>
                    <CustomButton><AddShoppingCartIcon sx={{ color: "white" }} /> <Typography variant="button" sx={{ textTransform: "uppercase", fontSize: "1rem", color: "white" }}>sepete ekle</Typography> </CustomButton>
                </CustomButtonBox>
            </Grid>
        </>
    );
}

export default AddToCart;
