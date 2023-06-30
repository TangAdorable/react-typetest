import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BasicTabs from './components/BasicTabs';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import DialogCreateNode from './components/DialogCreateNode';
import PMESIIGraph1 from './components/PMESIIGraph1';


export default function App() {

  const [PMESII, setPMESII] = React.useState<number>(0);
  const [Relation, setRelation] = React.useState<number>(0);


  const [open, setOpen] = React.useState(false);
  const CreateNodeOpen = () => {
    setOpen(true);
  };
  const CreateNodeClose = () => {
    setOpen(false);
  };


  return (

    <div>
      <CssBaseline />
      {/* "xs" | "sm" | "md" | "lg" | "xl" ,bgcolor:"green"*/}
      <Container maxWidth="xl" sx={{ marginTop: '50px', width: '95%' }}>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Stack spacing={1} direction="row">
            <Button color="success" size="small" variant="contained" onClick={CreateNodeOpen}>Create Node</Button>
            <Button color="info" size="small" variant="contained" >Create Relation</Button>
            <Button color="warning" size="small" variant="contained" onClick={CreateNodeOpen}>Update</Button>
          </Stack>

          <Button color="error" size="small" variant="contained" onClick={CreateNodeOpen}>Delete</Button>
        </Grid>

        <DialogCreateNode open={open} CreateNodeClose={CreateNodeClose} />

        <Grid container sx={{ marginTop: '10px' }} >

          <PMESIIGraph1 />
          <Grid item xs={12}>
            <BasicTabs value={{ pmesii: PMESII, relation: Relation }} />
          </Grid>
        </Grid>
      </Container>

    </div>
  )

}
