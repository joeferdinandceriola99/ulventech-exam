import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingState = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingState;
