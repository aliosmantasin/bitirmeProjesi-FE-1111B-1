import { Box, Grid, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const CommentCard = () => {

  const [value, setValue] = React.useState<number | null>(4);


  return (

    <Grid>
        <Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        03/05/24
      </Typography>
          <Box>
            <Rating
              size='small'
              name="simple-controlled"
              value={value}
              onChange={(_event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>    
          </Box>

      <Typography sx={{fontWeight:"600"}} variant='subtitle1'>Beğendim gayet güzeldi</Typography>
      <Typography   variant="body2">
        Ürünü gayet güzel ama eksikliği bir süreden sonra bayabiliyor insanı, teşekkürler.
      </Typography>
    </Grid>
 
  );
}

export default CommentCard;
