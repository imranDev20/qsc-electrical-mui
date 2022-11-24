import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BsPerson } from "react-icons/bs";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const HeroRequestService = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        color: "white",
        bottom: 0,
        right: 0,
        width: 550,
        p: 4,
        bgcolor: "white",
      }}
    >
      <Typography
        color="secondary"
        component="h3"
        variant="h4"
        fontWeight={600}
        mb={2}
      >
        Request Services Today
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            placeholder="Enter Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsPerson />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            placeholder="Enter Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsPerson />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            endIcon={<ArrowCircleRightRoundedIcon />}
            fullWidth
            variant="orange-outlined"
          >
            Request
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroRequestService;
