import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { HiCheck } from "react-icons/hi2";
import { theme } from "../global/layout";

const PricingCard = ({ services, name, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{ px: 3, py: 3, boxShadow: "0 0px 14px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <img src={icon} style={{ width: "60px", marginBottom: "10px" }} alt="" />
      <Typography component="h3" variant="h5">
        {name}
      </Typography>
      <Divider sx={{ mt: 2, mb: 4 }} />
      {services.map((item) => (
        <Grid container spacing={0} my={2} key={item.id}>
          <Grid item sm={1} display="flex" alignItems="center" direction="row">
            <HiCheck
              style={{
                display: "block",
                color: theme.palette.text.main,
              }}
            />
          </Grid>
          <Grid item sm={9}>
            <Typography sx={{ color: "text.main" }}>{item.name}</Typography>
          </Grid>
          <Grid item sm={2} display="flex" justifyContent="flex-end">
            <Typography sx={{ color: "primary.main", fontWeight: 500 }}>
              £{item.price}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Card>
  );
};

export default PricingCard;
