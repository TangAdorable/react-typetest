import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DescriptionNode from './DescriptionNode';
import NodeCreateUpdateDelete from './NodeCreateUpdateDelete';
import DescriptionRelation from './DescriptionRelation';
import RelationCreateUpdateDelete from './RelationCreateUpdateDelete';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


interface IndexProps {
  value: {
    pmesii: number;
    relation: number;
  };
}


export default function BasicTabs(props:IndexProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // console.log('pmesii',props.value.pmesii)
    // console.log('relation',props.value.relation)
  };

  React.useEffect(() => {
    if (props.value.relation > 0) {
      setValue(1);
    }
  }, [props.value.relation]);

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Node: Create - Update - Delete" {...a11yProps(0)} />
            <Tab label="Relation: Create - Update - Delete" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <NodeCreateUpdateDelete value={{pmesii:props.value.pmesii}} />
            </Grid>
            <Grid item xs={4}>
              <DescriptionNode />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <RelationCreateUpdateDelete value={props.value}/>
            </Grid>
            <Grid item xs={4}>
              <DescriptionRelation />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
  );
};


