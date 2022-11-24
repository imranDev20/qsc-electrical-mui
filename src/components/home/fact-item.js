import styled from "@emotion/styled";
import { keyframes, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

const FactItem = ({ title, percentage }) => {
  const indeterminate1Keyframes = keyframes({
    "0%": {
      left: "-35%",
      right: "100%",
    },
    "100%": {
      left: "0%",
      right: `${100 - percentage}%`,
    },
  });

  const StyledLinearProgress = styled(LinearProgress)({
    "& .MuiLinearProgress-bar1Indeterminate": {
      width: "auto",
      animation: `${indeterminate1Keyframes} 2s linear forwards`,
    },
    "& .MuiLinearProgress-bar2Indeterminate": {
      display: "none",
    },
  });

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" component="h6" sx={{ fontSize: 17 }}>
          {title}
        </Typography>
        <Typography paragraph>{percentage}%</Typography>
      </Stack>
      <StyledLinearProgress
        variant="indeterminate"
        sx={{
          mb: 3,
          "&:last-of-type": {
            mb: 0,
          },
        }}
      />
    </>
  );
};

export default FactItem;
