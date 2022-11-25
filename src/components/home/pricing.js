import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PricingCard from "./pricing-card";
import RedentialIcon from "../../images/icons/residential.svg";
import CommercialIcon from "../../images/icons/commercial.svg";
import PlugIcon from "../../images/icons/plug.svg";

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
    services: [],
  },
  {
    id: 3,
    name: "Others",
    icon: PlugIcon,
    services: [],
  },
];

const Pricing = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography component="h2" variant="h4" textAlign="center">
        Best Maintenance Plans
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
    </Container>
  );
};

export default Pricing;
