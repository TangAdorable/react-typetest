import React, { useEffect, useState, useRef } from 'react';
import axios, { AxiosResponse } from 'axios';

import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import fcose from "cytoscape-fcose";
import expandCollapse from "cytoscape-expand-collapse";
import undoRedo from "cytoscape-undo-redo";
import * as Files_News from '../api-json/Files_News.json'
import { pmesiiStyleSheet } from '../constants/pmesii-constant';


export default function PMESIIGraph2() {
  Cytoscape.use(COSEBilkent);
  Cytoscape.use(fcose);
  expandCollapse(Cytoscape);
  undoRedo(Cytoscape);

  const layout = {
    name: "fcose",
  };

  const [pmesiiAPI, setPmesiiAPI] = useState<any>([]);
  const cyRef = useRef<any | null>(null);
  function handleEdgeClick(et: any) {
    console.log(et)
  }
  function handleNodeClick(et: any) {
    console.log(et)
  }

  useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //         const response: AxiosResponse<ApiResponse> = await axios.get('http://192.168.10.225:8001/search/all-node-labels?node_labels=Files_News');
    //         setNodes(response.data.nodes);
    //         setEdges(response.data.edges);
    //         setUsers(response.data);
    //         // console.log(response.data)
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    if (cyRef.current) {
      cyRef.current.style().fromJson(pmesiiStyleSheet).update();
      //     cyRef.current.style(0).selector('edge').style({
      //       'curve-style': 'bezier',
      //       //'width': 1,
      // 'width':function (ele:any) {
      //         if (ele.data('value') != undefined){
      //           return ele.data('value')*3;
      //         }else if(ele.data('size') != undefined){
      //     // ele.data('size')*3;
      //   }else{
      //           return 3;
      //         }
      //       },
      //       'font-size':8,
      //       'line-color': function(ele:any) {
      //         return ele.data('color');
      //       }
      //     })
      cyRef.current.expandCollapse({
        layoutBy: {
          name: "fcose",
          animate: false,
          randomize: false,
          fit: false,
        },
        fisheye: true,
        animate: false,
      });

      cyRef.current.on("click ", "edge", handleEdgeClick);
      cyRef.current.on("click ", "node", handleNodeClick);
    }
    setPmesiiAPI(Files_News);
  }, []);



  return (
    <>
      {/* <CytoscapeComponent 
                    cy={(cy) => { cy = cy }}
                    elements={CytoscapeComponent.normalizeElements(users)}
                    style={{ width: '100%', height: '570px',backgroundColor: "#9e9e9e" }} layout={layout}/> */}



      <CytoscapeComponent
        //   elements={elements}
        elements={CytoscapeComponent.normalizeElements(pmesiiAPI)}
        // stylesheet={pmesiiStyleSheet}
        layout={layout}
        style={{
          width: "100%",
          height: "calc(100vh - 220px)",
          zIndex: 1,
          position: "relative",
        }}
        // style={{ width: "100%", height: "100vh" }}
        wheelSensitivity={0.2}
        motionBlur={false}
        motionBlurOpacity={0.2}
        cy={(cy: any) => {
          cyRef.current = cy;
        }}
      />
    </>
  )
}