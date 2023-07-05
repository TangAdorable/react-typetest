// import config from "@/constants/config";
import config from "../../constants/config";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  Typography,
  Skeleton,
  Divider,
  Grid,
  Box,
  Paper,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
// import { useRouter } from "next/router";
// import { INews } from "@/lib/modules/type";
// import { setTostringFormat } from "@/lib/date-funtion";

type Props = {
  open: boolean;
  handleClose: any;
  newsId: number | null;
};

export default function NewsDialog({ open, handleClose, newsId }: Props) {
  const [news, setNews] = useState<any | undefined>();
  const [isLoadingNews, setisLoadingNews] = useState<boolean>(false);
  
  // const router = useRouter()
  const theme = useTheme()

  const loadNews = async (newsId: number | null) => {
    if (newsId) {
      setisLoadingNews(true);
      try {
        const res = await axios.get(config.NEWS_CIRCLE_SERVICE_URL + "/news/" + newsId);
        if (res.status === 200) {
          setNews(res.data);
        }
      } catch (error) {
        return;
      }

      setisLoadingNews(false);
    }
  };

  const handleClickRef = (e: any, url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
       if (newWindow) newWindow.opener = null
  }

  const refLinkRender = (refLinks: string[]) => {
  if(refLinks){
    return ( 
        <>
          {isLoadingNews ? (
            <Skeleton />
          ) : (
            <Stack direction={"row"} spacing={1}>
            {refLinks.map((url: string, index: number) => (
              <Box key={index} onClick={(e) => handleClickRef(e,url)}>
                <Paper sx={{borderRadius:20, paddingX:2, ":hover":{backgroundColor:'rgb(140, 157, 98)', cursor:'pointer'}}}>
                  <Typography>{"Ref " + (index + 1)}</Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
          )}
        </>
      );
  }
  };

  const checkLoadingText = (text: string, focus?: boolean) => {
    return (
      <>
        {isLoadingNews ? (
          <Skeleton width={200} />
        ) : (
          <Typography fontWeight={focus ? 300 : 250}>{text}</Typography>
        )}
      </>
    );
  };

  const pmesiiRender = (pmesii: any[]) => {
    if(pmesii){
      return <Stack spacing={1}>
        {pmesii.map( (pmesiiRelation:any,index: number) => (
            // <Typography fontWeight={250} key={index}>{`${pmesilRelation.from.pmesii} ${pmesilRelation.from.country} เกิดการ ${pmesilRelation.relation} ${pmesilRelation.to.pmesii} ${pmesilRelation.to.country}`}</Typography>
            <Box key={index}> 
            <Stack direction={'row'} spacing={1}>
            <Typography>{`${pmesiiRelation.from.sub_ascope_name}(${pmesiiRelation.from.ascope})`}</Typography>
            <Typography>{`ของด้าน ${pmesiiRelation.from.pmesii}`}</Typography>
            <Typography>{`ของประเทศ ${pmesiiRelation.from.country}`}</Typography>
  
            <Typography color={'rgb(140, 157, 98)'} >{`${pmesiiRelation.relation}`}</Typography>
  
            <Typography>{`${pmesiiRelation.to.sub_ascope_name}(${pmesiiRelation.to.ascope})`}</Typography>
            <Typography>{`ของด้าน ${pmesiiRelation.to.pmesii}`}</Typography>
            <Typography>{`ของประเทศ ${pmesiiRelation.to.country}`}</Typography>
            </Stack>
            </Box>
        
        ))}
    </Stack>
    }
  }

  useEffect(() => {
    loadNews(newsId);
  }, [open]);

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"xl"}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={2}
        >
          <Stack direction={"row"} spacing={4}>
            <Typography>วันที่บันทึกข่าวเข้าระบบ</Typography>
            {isLoadingNews ? (
              <Skeleton />
            ) : (
              <Typography fontWeight={300}>
                {/* {setTostringFormat(news?.create_at!)} */}
              </Typography>
            )}
          </Stack>

          <Button onClick={handleClose} variant="outlined" color="error">
            ปิด
          </Button>
        </Stack>
        <Divider />
      </DialogTitle>
      <DialogContent sx={{paddingBottom:8}}>
        <Grid container>
          <Grid item xs={news?.image_path?.length! > 0 ? 8 : 12}>
            <Stack spacing={1}>
              <Stack direction={"row"} spacing={2}>
                <Box width={120}>
                  <Typography>{"ชื่อกลุ่ม/ชุดข้อมูล"}</Typography>
                </Box>
                {checkLoadingText(news?.headnews!)}
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Box width={120}>
                  <Typography width={100}>ประเภทข้อมูล :</Typography>
                </Box>
                {checkLoadingText(news?.datatype!)}
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Box width={120}>
                  <Typography>ผู้บันทึก :</Typography>
                </Box>
                <Typography></Typography>
              </Stack>

              <Stack direction={"row"} spacing={2} paddingY={2}>
                <Box width={120}>
                  <Typography>หัวข้อข่าว :</Typography>
                </Box>
                {checkLoadingText(news?.title!, true)}
              </Stack>

              <Stack direction={"row"} spacing={2} paddingY={2}>
                <Box minWidth={120}>
                  <Typography>รายละเอียด: </Typography>
                </Box>
                {checkLoadingText(news?.description!)}
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Box width={120}>
                  <Typography width={120}>วิเคราะห์เพิ่มเติม:</Typography>
                </Box>
                {checkLoadingText(news?.analysis_text!)}
              </Stack>

              <Stack direction={"row"} spacing={2} paddingTop={2}>
                <Box width={120}>
                  <Typography width={120}>อ้างอิง:</Typography>
                </Box>
                {refLinkRender(news?.link!)}
              </Stack>

              <Stack direction={"row"} spacing={2} paddingTop={2}>
                <Box width={120}>
                  <Typography width={120}>ผลทาง PMESII:</Typography>
                </Box>
                {pmesiiRender(news?.pmesii!)}
              </Stack>


            </Stack>
          </Grid>
          {news?.image_path?.length! > 0 ?? (
            <Grid item xs={4}>
              image
            </Grid>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
