import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface labelName {
  id: number;
  labels: string;
}

export default function App() {
  const navigate = useNavigate();
  const [label, setLabel] = useState<labelName[]>([])

  useEffect(() => {
    fetchLabels();
  }, []);


  const fetchLabels = async () => {
    try {
      const response = await axios.get<labelName[]>('http://192.168.10.225:8000/search/all-labels-name');
      setLabel(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const tableCellClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const labelName = (e.target as HTMLElement).innerHTML;
    // console.log(labelName)
    navigate(`/pmesii-label/${labelName}`, { replace: true });
  };

  return (
    <div>
      <CssBaseline />
      {/* <Container maxWidth="xl" sx={{ marginTop: '50px', width: '95%' }}> */}
      <Container maxWidth="xl" sx={{ marginTop: '50px', width: '60%' }}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead >
              <TableRow >
                <TableCell align="center">Order</TableCell>
                <TableCell align="center">Label Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {label.map((row) => (
                <TableRow
                  key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  {/* <TableCell onClick={()=>{to={`/pmesii-label/${row.labels}`}}} align="left"> */}
                  <TableCell
                    onClick={tableCellClickHandler}
                    align="left"
                    style={{ cursor: 'pointer' }}
                  >
                    {row.labels}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )

}
