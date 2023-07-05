import React, { useEffect, useRef, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import fcose from "cytoscape-fcose";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import { pmesiiStyleSheet } from "@/constants/pmesii-constant";
import { pmesiiStyleSheet } from "../constants/pmesii-constant";
import DownloadIcon from "@mui/icons-material/Download";
import expandCollapse from "cytoscape-expand-collapse";
import undoRedo from "cytoscape-undo-redo";
import PmesiiDetail from "./PmesiiDetail";
import HelpIcon from "@mui/icons-material/Help";
import HelperDialog from "./Dialog/HelperDialog";

type Props = {
  pmesillNodes: any[] | [];
};

export default function PmesiiSpace({ pmesillNodes }: Props) {
  const [focusDetailList, setFocusDetailList] = useState<any>(null);
  const [isShoweUi, setIsShowUi] = useState<boolean>(true);

  const [isOpenHelperWindow, setIsOpenHelperWindow] = useState<boolean>(false)

  const handleOpenHelperWindow = () => setIsOpenHelperWindow(true)
  const handleCloseHelperWindow = () => setIsOpenHelperWindow(false)

  const cyRef = useRef<any | null>(null);

  Cytoscape.use(COSEBilkent);
  Cytoscape.use(fcose);

  expandCollapse(Cytoscape);
  undoRedo(Cytoscape);

  // const layout = { name: "cose-bilkent" };

  const layout = {
    name: "fcose",
  };

  const handleEdgeClick = (event: any) => {
    const targetEdge = event.target;
    const data = targetEdge.data();

    if (targetEdge.selected()) {
      setFocusDetailList(data);
      // console.log(data);
    }
  };

  const handleNodeClick = () => { }

  const handleExportClick = () => {
    if (cyRef.current) {
      const pngUrl = cyRef.current.png();
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "graph.png";
      link.click();
    }
  };


  const handleDblClickClearDetail = () => setFocusDetailList(null);
  const handChageShowui = (e: any) => setIsShowUi(e.target.checked);

  useEffect(() => {
    if (cyRef.current) {
      cyRef.current.style().fromJson(pmesiiStyleSheet).update();
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

      // cyRef.current.on("click ", "edge", handleEdgeClick);
      // cyRef.current.on("click ", "node", handleNodeClick);

      cyRef.current.on("tap ", "node", function(evt:any){
        var node = evt.target;
        console.log( 'id ' + node.id() );
        console.log( 'country ' + node.data("country") );
        console.log( 'pmesii ' + node.data("pmesii") );
        console.log( 'ascope ' + node.data("ascope") );
        console.log( 'name ' + node.data("name") );
      });

    }
  }, []);

  return (
    <Box sx={{ width: "100%", height: "82vh" }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography>PMESII</Typography>

        <Stack direction={"row"} spacing={1}>
          <FormControlLabel
            control={<Checkbox defaultChecked onChange={handChageShowui} />}
            label="Show UI"
          />
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleExportClick}
          >
            DOWNLOAD PNG
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          borderColor: "rgba(125,125,125,0.1)",
          borderStyle: "solid",
          borderWidth: "1px",
          marginTop: 1,
          // padding:1,
          position: "relative",
        }}
      // onDoubleClick={handleDblClickClearDetail}
      >
        <CytoscapeComponent
          //   elements={elements}
          elements={CytoscapeComponent.normalizeElements(pmesillNodes)}
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

        {isShoweUi && focusDetailList && (
          <Box sx={{ position: "absolute", zIndex: 2, right: 6, top: 6 }}>
            <PmesiiDetail relation={focusDetailList!} />
          </Box>
        )}

        {isShoweUi && (
          <Box sx={{ position: "absolute", zIndex: 2, left: 6, top: 6 }}>
            <IconButton onClick={handleOpenHelperWindow}>
              <HelpIcon />
            </IconButton>
          </Box>
        )}

        <HelperDialog handleClose={handleCloseHelperWindow} open={isOpenHelperWindow} />

      </Box>
    </Box>
  );
}
