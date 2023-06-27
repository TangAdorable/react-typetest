import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DescriptionNode() {

  const gridStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <div style={{ fontSize: "18px", textAlign: "center" }}>คำอธิบาย</div>
      <Grid container
        direction="row"
        rowSpacing={0.5}
        columnSpacing={{ xs: 0.5, md: 0.5 }}>
        <Grid item xs={6}>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={0.5}
            columnSpacing={{ xs: 0.5, md: 0.5 }}
          >
            <Grid item xs={6}>
              <div style={{ fontSize: "15px", textAlign: "center" }}>PMESII Colors</div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px", textAlign: "center" }}>PMESII</div>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#03a9f4",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>PMESII</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "white",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Military</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#4caf50",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Social</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#dd33fa",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Information</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#ff9800",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Infrastructure</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#ffef62",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Economic</Item>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={0.5}
            columnSpacing={{ xs: 0.5, md: 0.5 }}
          >
            <Grid item xs={6}>
              <div style={{ fontSize: "15px", textAlign: "center" }}>Ascope Colors</div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px", textAlign: "center" }}>Ascope</div>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Area</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Structures</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Capabilities</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Organization</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>People</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Events</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}