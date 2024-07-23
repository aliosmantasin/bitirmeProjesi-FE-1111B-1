import { Grid, Box, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import styled from '@emotion/styled';
import ProteinCategories from "../../../src/assets/image/ProteinCategories.jpeg"
import VitaminCategories from "../../../src/assets/image/VitaminCategories.jpeg"
import HealthCategories from "../../../src/assets/image/SağlıkCategories.jpeg"
import SportFoodCategories from "../../../src/assets/image/SporCategories.jpeg"
import FoodCategories from "../../../src/assets/image/GidaCategories.jpeg"
import AllProductsCategories from "../../../src/assets/image/TumUrun.jpg"

const ProductName = [
    { name: 'PROTEİN', path: '/', img: ProteinCategories },
    { name: 'VİTAMİNLER', path: '/', img: VitaminCategories },
    { name: 'SAĞLIK', path: '/', img: HealthCategories },
    { name: 'SPOR GIDALARI', path: '/', img: SportFoodCategories },
    { name: 'GIDA', path: '/', img: FoodCategories },
    { name: 'TÜM ÜRÜNLER', path: '/', img: AllProductsCategories },
];

const CustomImg = styled("img")`
  width: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 1rem;
`;

const CustomBox = styled(Box)`
    position: absolute;
    width: 110px;
    bottom: 30%;
    right: 10%;
    text-align: right;
    @media (max-width: 600px) {
        width: 100px;
        height: auto;
        bottom: 10%;
        right: 5%;
      }
    `
const CustomTypographt = styled(Typography)`
  font-weight: 600;
  font-size: 1.2rem;
  transform: translate(-50%, -50%);
  color: #222222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  `
const CustomButton = styled(Button)`
    line-height: 1;
    `
const Categories = () => {
    return (
        <Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                <Grid container sx={{ maxWidth: 1200, display: "flex", margin: "auto" }}>
                    {ProductName.map((item) => (
                        <Grid item xs={6} sm={6} md={4} key={item.name} sx={{ p: 1 }}>
                            <Box sx={{ display: "flex", position: "relative", width: "100%" }}>
                                <CustomImg src={item.img} alt={item.name} />
                                <CustomBox>
                                    <CustomTypographt variant="button">{item.name}</CustomTypographt>
                                    <CustomButton sx={{ backgroundColor: "#222222" }} variant="contained">incele</CustomButton>
                                </CustomBox>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Fragment>
    );
}

export default Categories;
