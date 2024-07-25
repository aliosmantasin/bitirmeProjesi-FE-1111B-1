
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';





const CommentCard = () => {
  return (

    <Grid>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        03/05/24
      </Typography>
      <Typography sx={{fontWeight:"600"}} variant='subtitle1'>Beğendim gayet güzeldi</Typography>
      <Typography variant="body2">
        Ürünü gayet güzel ama eksikliği bir süreden sonra bayabiliyor insanı, teşekkürler.
      </Typography>
    </Grid>
 
  );
}

export default CommentCard;
