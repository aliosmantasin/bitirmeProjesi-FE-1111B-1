import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Product {
  head: string;
  discount?: string;
  title: string;
}

const SizeOfProduct: Product[] = [
  { head: '400g', title:'16 servis', discount: ''},
  { head: '1.6 KG', title:'64 servis',discount: ''},
  { head: '1.6KG X 2 ADET', title:'128 servis', discount: '6'},

];

const CustomGrid = styled(Grid)`
  width: 100%;
  height: auto;
  display: flex !important;
  flex-wrap: wrap;
  gap: 10px;
`;

const CustomBox = styled(Box)<{ selected: boolean }>`
  min-width: 150px;
  width: auto;


  border: ${(props) => (props.selected ? '2px solid #2327ac' : '2px solid #dddddd')};
  background-color: #f6f8f9;
  position: relative;
  cursor: pointer;
  padding: 10px;
`;

const CustomTypography = styled(Box)`
  display: flex;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: center;
`;

const CustomDiscountBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  transform: translateY(-50%);
`;

const CheckBox = styled(CheckCircleIcon)`
  color: #2327ac;
  position: absolute;
  top: 17px;
  right: 0px;
  width: 20px;
`;

const ProductSize: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelect = (productName: string) => {
    setSelectedProduct(productName === selectedProduct ? null : productName);
  };

  return (
    <>
      <CustomGrid item>
        <Box width="100%">
          <Typography sx={{ fontWeight: 'bold' }} variant="button">
            Boyut:
          </Typography>
        </Box>
        {SizeOfProduct.map((item) => (
          <CustomBox
            key={item.head}
            selected={item.head === selectedProduct}
            onClick={() => handleSelect(item.head)}
          >
            <Box>
              <CustomTypography >{item.head}</CustomTypography>
              <Typography variant='body2' sx={{textAlign:"center"}}>{item.title}</Typography>
            </Box>
            {item.discount && ( //
           <CustomDiscountBox sx={{fontSize:"0.7rem", fontWeight:"bold",padding:"3px"}}>%{item.discount} İNDİRİM</CustomDiscountBox>
          )}
            {item.head === selectedProduct && <CheckBox />}
          </CustomBox>
        ))}
      </CustomGrid>
    </>
  );
};

export default ProductSize;
