
import Whey from "../../assets/image/product/WheyProtein.jpeg"
import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSlots, AccordionSummary, Fade, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";


const ProductImg = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  
    const CustomImg = styled("img")`
    max-width: 350px;
    width: 350px;
    object-fit: contain;
    @media (max-width: 1420px){
        width: 300px
    }
    @media (max-width: 600px){
        width: 350px;
        display: flex;
        margin: auto;
    }
   `

        const CustomGrid = styled(Grid)`
            display: none;
        @media (max-width: 1420px){
            width: 300px;
            display: block;
        }
        @media (max-width: 600px){
            width: 350px;
            display: none;
            margin: auto;
        }
        `


  return (

   <>
    <Grid item xs={12} sm={4} md={2}>
        <CustomImg src={Whey} />


    
    <CustomGrid>
        <Typography variant='caption' display="block" gutterBottom>Son Kullanma Tarihi: 07.2025</Typography>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Özellikler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Besin İçeriği</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Kullanım Şekli</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CustomGrid>

    </Grid>

 
   </>
  )
}

export default ProductImg