import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BasicTabs from './components/BasicTabs';
import Button from '@mui/material/Button';

export default function App() {

  const [PMESII, setPMESII] = React.useState<number>(0);
  const [Relation, setRelation] = React.useState<number>(0);

  const min = 10000;
  const max = 100000;
  const pmesiiClick = () => {
    setPMESII(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const relationClick = () => {
    setRelation(Math.floor(Math.random() * (max - min + 1)) + min);
  };


  return (
    <div>
      <CssBaseline />
      {/* "xs" | "sm" | "md" | "lg" | "xl" ,bgcolor:"green"*/}
      <Container maxWidth="xl" sx={{ marginTop: '50px', width: '95%' }}>
        <Grid container spacing={1}>
          <Grid spacing={1}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{height: "315px",backgroundColor: "#b2a429"}}
            
          >
            <Button onClick={pmesiiClick} variant="contained">Node PMESII</Button>
            <br/>
            <Button onClick={relationClick} color="warning" variant="contained">Relation PMESII</Button>
          </Grid>
          <Grid item xs={12}>
            <BasicTabs value={{ pmesii: PMESII, relation: Relation }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )

}
