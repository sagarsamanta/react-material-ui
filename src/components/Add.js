import React from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
const Add = () => {
  return (
    <>
      <Tooltip title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%)-25px",md:30}}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
