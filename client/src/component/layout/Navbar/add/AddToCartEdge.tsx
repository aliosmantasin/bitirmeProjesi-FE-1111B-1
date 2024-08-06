import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';



const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 0,
    padding: '0 5px',

  },
}));

export default function AddToCartEdge() {
  return (
    <Grid aria-label="cart" >
      <StyledBadge badgeContent={1} color='success'>
        <ShoppingCartIcon/>
      </StyledBadge>
    </Grid>
  );
}
