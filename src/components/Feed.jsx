import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post name="Sagar samanta" imge="" />
      <Post
        name="Niloy Das"
      />
      <Post
        name="Ritu Sen"
      />
      <Post
        name="Bisal Das"
      />
    </Box>
  );
};

export default Feed;
