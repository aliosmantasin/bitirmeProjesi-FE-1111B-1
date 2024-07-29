import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

interface Product {
  name: string;
  colors: string;
}

const KindOfProduct: Product[] = [
  { name: 'Bisküvi', colors: '#e6bc79' },
  { name: 'Çikolata', colors: '#56311d' },
  { name: 'Muz', colors: '#f0d015' },
  { name: 'Salted Caramel', colors: '#b64200' },
  { name: 'Choco Nut', colors: '#7c3f01' },
  { name: 'Hindistan Cevizi', colors: '#ba914f' },
  { name: 'Raspberry Cheesecake', colors: '#cc1f5e' },
  { name: 'Çilek', colors: '#d71f33' },
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
  display: flex;
  justify-content: space-between;
  border: ${(props) => (props.selected ? '2px solid #2327ac' : '2px solid #dddddd')};
  background-color: #f6f8f9;
  position: relative;
  cursor: pointer;
`;

const CustomTypography = styled(Typography)`
  display: flex;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: center;
`;

interface CustomBoxColorProps {
  bgColor: string;
}

const CustomBoxColor = styled.div<CustomBoxColorProps>`
  width: 20px;
  min-height: 25px;
  height: 100%;
  background-color: ${(props) => props.bgColor};
`;

const CheckBox = styled(FileDownloadDoneIcon)`
  color: #ffffff;
  position: absolute;
  top: 2px;
  right: 0px;
  width: 20px;
`;

const ProductProperty: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelect = (productName: string) => {
    setSelectedProduct(productName === selectedProduct ? null : productName);
  };

  return (
    <>
      <CustomGrid item>
        <Box width="100%">
          <Typography sx={{ fontWeight: 'bold' }} variant="button">
            Aroma:
          </Typography>
        </Box>
        {KindOfProduct.map((item) => (
          <CustomBox
            key={item.name}
            selected={item.name === selectedProduct}
            onClick={() => handleSelect(item.name)}
          >
            <Box width="100%">
              <CustomTypography className="select">{item.name}</CustomTypography>
            </Box>
            <Box>
              <CustomBoxColor bgColor={item.colors}></CustomBoxColor>
            </Box>
            {item.name === selectedProduct && <CheckBox />}
          </CustomBox>
        ))}
      </CustomGrid>
    </>
  );
};

export default ProductProperty;
