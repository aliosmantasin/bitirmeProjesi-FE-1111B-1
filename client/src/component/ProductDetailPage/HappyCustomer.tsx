import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled'

const CustomTypography = styled(Typography)`
    display: flex;
    justify-content: center;
`

const HappyCustomer: React.FC = () => {
  return (
    <Grid item >
        <Box sx={{display:"flex", justifyContent:"space-evenly", mt:2}}>

        <Grid gap={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box>
        <LocalShippingIcon/> 
        </Box>
        <Box>
        <CustomTypography variant='body2'>Aynı Gün </CustomTypography>
        <CustomTypography variant='body2'>Ücretsiz Kargo</CustomTypography>
        </Box>
        </Grid>

        <Grid gap={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box>
        <GppGoodIcon/> 
        </Box>
        <Box>
        <CustomTypography variant='body2'>750.000+ </CustomTypography>
        <CustomTypography variant='body2'>Mutlu Müşteri</CustomTypography>
        </Box>
        </Grid>

        <Grid gap={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box>
        <AddReactionIcon/> 
        </Box>
        <Box>
        <CustomTypography variant='body2'>Memnuniyet</CustomTypography>
        <CustomTypography variant='body2'>Garantisi</CustomTypography>
        </Box>
        </Grid>
        </Box>

      
    </Grid>
  )
}

export default HappyCustomer