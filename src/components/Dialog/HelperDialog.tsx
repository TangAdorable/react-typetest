import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// import Image from "next/image";

type Props = {
  open: boolean;
  handleClose: any;
};

const colorNodetype = [
  {
    name: "Political",
    color: "blue",
  },
  {
    name: "Military",
    color: "white",
  },
  {
    name: "Social",
    color: "green",
  },
  {
    name: "Information",
    color: "pink",
  },
  {
    name: "Infrastructure",
    color: "orange",
  },
  {
    name: "Economic",
    color: "yellow",
  },
];

const ascopeNodeType = [
  {
    name: "Area",
    color: "#B8926A",
  },
  {
    name: "Structures",
    color: "#B8926A",
  },
  {
    name: "Capabilities",
    color: "#B8926A",
  },
  {
    name: "Organization",
    color: "#B8926A",
  },
  {
    name: "People",
    color: "#B8926A",
  },
  {
    name: "Events",
    color: "#B8926A",
  },
];


const lineStlye = [
  {
    name: "มีผลกระทบซึ่งกันและกัน",
    image: "/images/line_style/1.png",
    value: 2,
  },
  {
    name: "การปฏิบัติทางเดียว",
    image: "/images/line_style/2.png",
    value: 1,
  },
  {
    name: "การเชื่อโยงที่ได้รับการยืนยัน",
    image: "/images/line_style/3.png",
    value: 0,
  },
  {
    name: "การเชื่อโยงที่สงสัย",
    image: "/images/line_style/4.png",
    value: -1,
  },
];

const colorLineType = [


  {
    name: "สนับสนุน พึ่งพา เกื้อกูล",
    color: "Green",
  },
  {
    name: "ควบคุม ตัดสิน กำหนดทิศทาง ไกล่เกลี่ย",
    color: "yellow",
  },
  {
    name: "ขัดแย้ง ต่อต้าน มีอิทธิพล ปฏิปักษ์ รบกวน",
    color: "Red",
  },
];


export default function HelperDialog({ open, handleClose }: Props) {

  const renderColorNode = (name: string, color: string) => {
    return (
      <Box>
        <Stack direction={"row"} spacing={2}>
          <Box sx={{ width: 20, height: 20 }}>
            <Paper sx={{ width: 20, height: 20, backgroundColor: color }} />
          </Box>

          <Typography>{name}</Typography>
        </Stack>
      </Box>
    );
  };

  const renderColorLine = (name: string, color: string) => {
    return (
      <Box>
        <Stack direction={"row"} spacing={2} alignItems={'center'}>
          <Box sx={{ width: 250, height: 2 }}>
            <Paper sx={{ width: 250, height: 2, backgroundColor: color }} />
          </Box>

          <Typography>{name}</Typography>
        </Stack>
      </Box>
    );
  };

  const renderLineStyle = (name: string, image: string, index: number) => {
    return (
      <Box>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          {/* <Box sx={{ paddingY: 1 }}>
            <Image
              src={image}
              width={250}
              height={index >= 2 ? 1 : 10}
              alt=""
            />
          </Box> */}

          <Typography>{name}</Typography>
        </Stack>
      </Box>
    );
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"md"}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">คำอธิบาย</DialogTitle>
      <DialogContent sx={{ paddingBottom: 8 }}>
        <Grid container direction={"row"} spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={4} sx={{ marginLeft: 4 }}>
              <Box>
                <Typography fontWeight={300} color={"gray"}>
                  สีของโหนดแต่ละประเภท PMESII
                </Typography>
                <Stack spacing={1} marginTop={2}>
                  {colorNodetype.map((item: any) =>
                    renderColorNode(item.name, item.color)
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography fontWeight={300} color={"gray"}>
                  สีของโหนดแต่ละประเภทของ ASCOPE
                </Typography>
                <Stack spacing={1} marginTop={2}>
                  {ascopeNodeType.map((item: any) =>
                    renderColorNode(item.name, item.color)
                  )}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={8}>
            <Stack spacing={4} sx={{ marginLeft: 4 }}>
              <Box>
                <Typography fontWeight={300} color={"gray"}>
                  ลักษณะของเส้นแต่ละประเภท
                </Typography>
                <Stack spacing={1} marginTop={2}>
                  {lineStlye.map((item: any, index: number) =>
                    renderLineStyle(item.name, item.image, index)
                  )}
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={300} color={"gray"}>
                  ลักษณะความแข็งแรงของเส้นแต่ละประเภท
                </Typography>
                <Stack spacing={1} marginTop={2}>
                  <Box>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {/* <Box sx={{ paddingY: 1 }}>
                        <Image
                          src={"/images/line_style/3.png"}
                          width={250}
                          height={8}
                          alt=""
                        />
                      </Box> */}

                      <Typography>{"การเชื่อมโยงแข็งแรง"}</Typography>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {/* <Box sx={{ paddingY: 1 }}>
                        <Image
                          src={"/images/line_style/3.png"}
                          width={250}
                          height={1}
                          alt=""
                        />
                      </Box> */}

                      <Typography>{"การเชื่อมโยงอ่อนแอ"}</Typography>
                    </Stack>
                  </Box>


                  <Box>
                <Typography fontWeight={300} color={"gray"}>
                  สีของเส้นแต่ละประเภท
                </Typography>
                <Stack spacing={1} marginTop={2}>
                  {colorLineType.map((item: any) =>
                    renderColorLine(item.name, item.color)
                  )}
                </Stack>
              </Box>

                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
