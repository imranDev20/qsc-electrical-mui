import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PricingCard from "./pricing-card";
import RedentialIcon from "../../images/icons/residential.svg";
import CommercialIcon from "../../images/icons/commercial.svg";
import PlugIcon from "../../images/icons/plug.svg";
import { theme } from "../global/layout";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const priceData = [
  {
    id: 1,
    name: "Residential",
    icon: RedentialIcon,
    services: [
      {
        id: 1,
        name: "Electrical Installation Condition Report (EICR)",
        price: 99,
      },
      {
        id: 2,
        name: "Electrical Installation Certificate",
        price: 250,
      },
      {
        id: 3,
        name: "Electrical Fault Finding",
        price: 80,
      },
      {
        id: 4,
        name: "Light Installation",
        price: 50,
      },
      {
        id: 5,
        name: "Socket Installation",
        price: 40,
      },
      {
        id: 6,
        name: "Fire Alarm Certificate",
        price: 75,
      },
      {
        id: 7,
        name: "Emergency Light Installation (Per Unit)",
        price: 70,
      },
      {
        id: 8,
        name: "Emergency Light Certificate",
        price: 75,
      },
      {
        id: 9,
        name: "Fire Alarm Installation (Per Unit)",
        price: 65,
      },
      {
        id: 10,
        name: "PAT Testing (Max 10 Items)",
        price: 50,
      },
      {
        id: 11,
        name: "Consumer Unit",
        price: 500,
      },
      {
        id: 12,
        name: "Earth Bonding (Max 5m Cable)",
        price: 70,
      },
      {
        id: 13,
        name: "Earth Bonding (Max 10m Cable)",
        price: 120,
      },
      {
        id: 14,
        name: "EICR Legal Requirements",
        price: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Commercial",
    icon: CommercialIcon,
    services: [
      {
        id: 1,
        name: "Electrical Installation Condition Report (EICR)",
        price: 150,
      },
      {
        id: 2,
        name: "Electrical Installation Certificate",
        price: 350,
      },
      {
        id: 3,
        name: "Electrical Fault Finding",
        price: 100,
      },
      {
        id: 4,
        name: "Light Installation",
        price: 70,
      },
      {
        id: 5,
        name: "Socket Installation",
        price: 50,
      },
      {
        id: 6,
        name: "Fire Alarm Certificate",
        price: 75,
      },
      {
        id: 7,
        name: "Commercial Fire Alarm Installation",
        price: 2500,
      },
      {
        id: 8,
        name: "PAT Testing (Max 10 Items)",
        price: 100,
      },
      {
        id: 9,
        name: "Consumer Unit",
        price: 1000,
      },
      {
        id: 10,
        name: "Earth Bonding (Max 5m Cables)",
        price: 95,
      },
      {
        id: 11,
        name: "Earth Bonding",
        price: 175,
      },
      {
        id: 12,
        name: "EICR Legal Requirements",
        price: 75,
      },
    ],
  },
  {
    id: 3,
    name: "Others",
    icon: PlugIcon,
    services: [
      {
        id: 1,
        name: "Full Rewiring (1 Bed/Studio Property)",
        price: 75,
      },
      {
        id: 2,
        name: "Full Rewiring (2 Bed/Studio Property)",
        price: 75,
      },
      {
        id: 3,
        name: "Full Rewiring (3 Bed/Studio Property)",
        price: 75,
      },
      {
        id: 4,
        name: "Full Rewiring (4 Bed/Studio Property)",
        price: 75,
      },
      {
        id: 5,
        name: "Full Rewiring (5 Bed/Studio Property)",
        price: 75,
      },
      {
        id: 6,
        name: "Labelling Fuse Boards (Upto 12 Circuits)",
        price: 75,
      },
      {
        id: 7,
        name: "RCD - Residual Current Device",
        price: 75,
      },
      {
        id: 8,
        name: "MCB - Mini Circuit Breaker",
        price: 75,
      },
      {
        id: 9,
        name: "RCBO - Residual Circuit Breaker with Overload",
        price: 75,
      },
      {
        id: 10,
        name: "Adjustments to Circuit",
        price: 75,
      },
      {
        id: 11,
        name: "Repairs Inside Consumer Unit",
        price: 75,
      },
      {
        id: 12,
        name: "Minor Repairs to Consumer Unit",
        price: 75,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <Container sx={{ mt: 15 }}>
      <Typography component="h2" variant="h4" textAlign="center">
        Best Maintenance Plans
      </Typography>

      <Typography
        paragraph
        textAlign="center"
        sx={{
          color: "text.main",
          ...theme.typography.body2,
          my: 3,
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        We offers our services on a “Pay as You Use” basis. There is a minimum
        charge of $50 per visit, which is exempt if the repair cost is more than
        $200. We also offer 3 days workmanship guarantee.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {priceData.map((item) => (
          <Grid item sm={4} key={item.id}>
            <PricingCard
              services={item.services}
              name={item.name}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          endIcon={<ArrowCircleRightRoundedIcon />}
          variant="orange-outlined"
        >
          Contact
        </Button>
      </Box>
    </Container>
  );
};

export default Pricing;
