import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import DialogCreateNode from './components/DialogCreateNode';
import DialogCreateRelation from './components/DialogCreateRelation';
import DialogDeleteNodeRelation from './components/DialogDeleteNodeRelation';
import DialogUpdateNodeRelation from './components/DialogUpdateNodeRelation';
import PMESIIGraph2 from './components/PMESIIGraph2';


export default function App() {
  const [NodeOpen, setNodeOpen] = React.useState(false);
  const [RelationOpen, setRelationOpen] = React.useState(false);
  const [DeleteNodeRelation,setDeleteNodeRelation] = React.useState(false);
  const [UpdateNodeRelation,setUpdateNodeRelation] = React.useState(false);

  // create node
  const CreateNodeOpen = () => setNodeOpen(true);
  const CreateNodeClose = () => setNodeOpen(false);

  // create relation
  const CreateRelationOpen = () => setRelationOpen(true);
  const CreateRelationClose = () => setRelationOpen(false);

  // update node relation
  const UpdateNodeRelationOpen = () => setUpdateNodeRelation(true);
  const UpdateNodeRelationClose = () => setUpdateNodeRelation(false);


  // delete node relation
  const DeleteNodeRelationOpen = () => setDeleteNodeRelation(true);
  const DeleteNodeRelationClose = () => setDeleteNodeRelation(false);


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
            <DialogCreateNode open={NodeOpen} onClose={CreateNodeClose} />

            <Button color="info" size="small" variant="contained" onClick={CreateRelationOpen} >Create Relation</Button>
            <DialogCreateRelation open={RelationOpen} onClose={CreateRelationClose} />

            <Button color="warning" size="small" variant="contained" onClick={UpdateNodeRelationOpen} >Update</Button>
            <DialogUpdateNodeRelation open={DeleteNodeRelation} onClose={DeleteNodeRelationClose} />
          </Stack>

          <Button color="error" size="small" variant="contained" onClick={DeleteNodeRelationOpen}>Delete</Button>
          <DialogDeleteNodeRelation open={DeleteNodeRelation} onClose={DeleteNodeRelationClose} delNodeRelation={{}}/>
        </Grid>
        <Grid container sx={{ marginTop: '10px' }} >

          <PMESIIGraph2 />
          {/* <Grid item xs={12}>
            <BasicTabs value={{ pmesii: PMESII, relation: Relation }} />
          </Grid> */}
        </Grid>
      </Container>

    </div>
  )

}
