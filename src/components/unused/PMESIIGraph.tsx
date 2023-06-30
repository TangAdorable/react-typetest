import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CytoscapeComponent from 'react-cytoscapejs';
import { EdgeDataDefinition, ElementDataDefinition, ElementDefinition, NodeDataDefinition } from 'cytoscape';


interface ApiResponse {
    nodes: [];
    edges: [];
}

export default function PMESIIGraph() {
    const [users, setUsers] = useState<any>([]);
    let cy:cytoscape.Core
    const [nodes, setNodes] = useState<NodeDataDefinition[]>([]);
    const [edges, setEdges] = useState<EdgeDataDefinition[]>([]);
    // const elements = [
    //     { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    //     { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    //     { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
    // ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const layout = { name: 'random' };
    // const layout = { name: 'cose-bilkent' };
    // const doMore = (cy: { nodes: () => any; on: (arg0: string, arg1: string, arg2: (e: { target: { id: () => any; }; }) => void) => void; }) => {
    //     console.log(cy.nodes());
    //     // cy.contextMenus(options);
    //     cy.on('tap', 'node', (e: { target: { id: () => any; }; }) => {
    //         console.log('tap', e.target.id());
    //     });
    // }    
    function test() {
        console.log(cy)
        cy.on('tap', 'node', (e: { target: { id: () => any; }; }) => {
            console.log('tap', e.target.id());
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await axios.get('http://192.168.10.225:8001/search/all-node-labels?node_labels=Files_News');
                setNodes(response.data.nodes);
                setEdges(response.data.edges);
                setUsers(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

            <CssBaseline />
            <button onClick={test}>TTT</button>
            <Container maxWidth="xl" sx={{ marginTop: '50px', width: '95%' }}>
                <h1 style={{ fontSize: "20px", fontWeight: "normal", textAlign: "center" }}>Hello</h1>

                <CytoscapeComponent 
                    cy={(cy) => { cy = cy }}
                    elements={CytoscapeComponent.normalizeElements(users)}
                    style={{ width: '100%', height: '500px',backgroundColor: "#b2a429" }} layout={layout}/>


            </Container>



        </>
    )
}