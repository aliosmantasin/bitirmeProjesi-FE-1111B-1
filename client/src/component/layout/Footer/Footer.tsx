import { Link } from 'react-router-dom';
import { Grid, List, ListItemText } from '@mui/material';
import styled from '@emotion/styled';



const pages = [
  { name: 'Meta Reklam', path: '#' },
  { name: 'Google Adwords', path: '#' },
  { name: 'Web Tasarım', path: '#' }
];

const StyledListItemText = styled(ListItemText)({
  margin: '10px',
  color: 'Highlight',
  transition: 'color 0.3s',
  opacity: "0.9",
  '&:hover': {
    color: '#1c75bc',
  },
});

const StyledList = styled(List)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    width: "100%",
    alignItems: 'flex-start',
    backgroundColor: "#f5fdffb1",
    marginTop: "0.2rem",
  },
});


const Footer = () => {
  return (
    <Grid maxWidth="lg" >
        
        <Grid sx={{xs:"12", sm:"3"}}>
             
        </Grid>
    

    

    </Grid>
  );
}

export default Footer;
