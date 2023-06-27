import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import CytoscapeComponent from 'react-cytoscapejs';


export default function PMESII() {
    const elements = [
        { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
     ];



    return (
        <>
            
                <CssBaseline />
                <Container maxWidth="xl" sx={{ marginTop: '50px', width: '95%' }}>
                <h1 style={{ fontSize: "20px", fontWeight: "normal", textAlign: "center" }}>Hello</h1>

                

                </Container>

                {/* <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } /> */}

        </>
    )
}