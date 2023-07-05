import React, { useEffect, useRef, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import DialogCreateNode from "./DialogCreateNode";
import DialogCreateRelation from './DialogCreateRelation';
import DialogDeleteNodeRelation from './DialogDeleteNodeRelation';
import DialogUpdateNodeRelation from './DialogUpdateNodeRelation';
// import PMESIIGraph2 from './components/unused/PMESIIGraph2';
import PmesiiSpace from './PMESIISpace';
// import * as Files_News from './api-json/Files_News.json'
import axios from "axios";
import config from "../constants/config";
// import Loading from "@/components/utilities/Loading";
import CircularProgress from '@mui/material/CircularProgress';


export default function PMESIILabel() {

  const [NodeOpen, setNodeOpen] = React.useState(false);
  const [RelationOpen, setRelationOpen] = React.useState(false);
  const [DeleteNodeRelation, setDeleteNodeRelation] = React.useState(false);
  const [UpdateNodeRelation, setUpdateNodeRelation] = React.useState(false);
  const [pmesiiAPI, setPmesiiAPI] = useState<any>([]);
  const [isLoadingPmesii, setIsLoadingPmesii] = useState<boolean>(false);

  // create node
  const CreateNodeOpen = () => setNodeOpen(true);
  const CreateNodeClose = async (isCreate: boolean) => {
    setNodeOpen(false);
    if (isCreate){
    await loadPmesiiNodes();
    }
  };

  // create relation
  const CreateRelationOpen = () => setRelationOpen(true);
  const CreateRelationClose = () => setRelationOpen(false);

  // update node relation
  const UpdateNodeRelationOpen = () => setUpdateNodeRelation(true);
  const UpdateNodeRelationClose = () => setUpdateNodeRelation(false);


  // delete node relation
  const DeleteNodeRelationOpen = () => setDeleteNodeRelation(true);
  const DeleteNodeRelationClose = () => setDeleteNodeRelation(false);



  const loadPmesiiNodes = async () => {
    setIsLoadingPmesii(true);
    const pmesiiLabel = "LabelTest"
    // const pmesiiLabel = "Files_News"
    // const label = "Label1";
    const res = await axios.get(
      config.SOFTNIX_PMESII_URL + "/search/all-node-labels?node_labels=" + pmesiiLabel
    );
    if (res.status === 200) {
      setPmesiiAPI(res.data);
      // console.log(res.data);
      setIsLoadingPmesii(false);
    }
  };

  useEffect(() => {
    loadPmesiiNodes();
    // setPmesiiAPI(Files_News);
  }, []);

  return (
    <div>
      <CssBaseline />
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
            <DialogUpdateNodeRelation open={UpdateNodeRelation} onClose={UpdateNodeRelationClose} />
          </Stack>

          <Button color="error" size="small" variant="contained" onClick={DeleteNodeRelationOpen}>Delete</Button>
          <DialogDeleteNodeRelation open={DeleteNodeRelation} onClose={DeleteNodeRelationClose} delNodeRelation={{}} />
        </Grid>
        <Grid container sx={{ marginTop: '10px' }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >

          {isLoadingPmesii ? (
            // <Loading />
            <CircularProgress />
          ) : (
            <>
              <PmesiiSpace pmesillNodes={pmesiiAPI} />
            </>
          )}
          {/* <PMESIIGraph2 /> */}
        </Grid>
      </Container>

    </div>
  )

}