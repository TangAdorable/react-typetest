import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
// import config from "@/constants/config";
import config from "../constants/config";
import dayjs from "dayjs";
import NewsDialog from "./Dialog/NewsDialog";
type Props = {
  relation: any;
};

export default function PmesiiDetail({ relation }: Props) {
  const [newsList, setnewsList] = useState<any[]>([]);
  const [news, setNews] = useState<any | null>(null);

  const [isOpenNewsDialog, setisOpenNewsDialog] = useState<boolean>(false)

  const handleOpenNewsDialog = () => setisOpenNewsDialog(true)
  const handleCloseNewsDialog = () => {
    setisOpenNewsDialog(false)
    setNews(null);
  }

  const handleOnHover = (e: any, item: any) => {};

  const handleOnClickBox = (e: any, item: any) => {
    if (news === null) {
      // console.log(item.id)
      setNews(item);
      handleOpenNewsDialog()
    } else {
      if (news.id === item.id) {
        // console.log(news.id, item.id)
        setNews(null);
      }
    }
  };

  const initailLoadNews = async (relation: any) => {
    let newsString = "";
    if (typeof relation.newsid === "number") {
      newsString = relation.newsid;
    } else {
      if (typeof relation.newsid === "object") {
        for (const id of relation.newsid) {
          newsString += `${id}-`;
        }

        newsString = newsString.slice(0, -1);
      }
    }

    try {
      const res = await axios.get(
        config.NEWS_CIRCLE_SERVICE_URL + "/news/get-by-ids/" + newsString
      );

      if (res.status === 200) {
        setnewsList(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    // console.log(relation)
    initailLoadNews(relation);
  }, [relation]);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>รายละเอียด</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ height: "calc(100vh - 320px)", width: 300 }}>
            <Paper sx={{ height: "100%", paddingY: 2 }}>
              <Stack spacing={0.5}>
                {newsList.map((item: any) => (
                  <Box
                    key={item.title}
                    // sx={{ paddingX: 1 }}
                    onClick={(e: any) => handleOnClickBox(e, item)}
                    onMouseEnter={(e: any) => handleOnHover(e, item)}
                  >
                    <Paper
                      sx={{
                        backgroundColor:
                          news?.id === item.id ? "#70853B" : "black",
                        padding: 2,
                        ":hover": {
                          backgroundColor: "#3C3C3C",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Stack spacing={2}>
                      <Typography fontSize={12} fontWeight={300}>
                        {item.title}
                      </Typography>
                      <Typography color={'rgba(125,125,125)'} fontSize={12} fontWeight={300}>
                        {dayjs(item.create_at).format('DD MMMM YYYY')}
                      </Typography>
                      </Stack>
                    </Paper>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>

      {
        news && <NewsDialog open={isOpenNewsDialog} handleClose={handleCloseNewsDialog} newsId={news.id} />
      }
    </>
  );
}
