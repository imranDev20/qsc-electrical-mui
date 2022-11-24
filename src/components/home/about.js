import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { theme } from "../global/layout";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Grid container spacing={5}>
        <Grid item sm={5}>
          <Box sx={{ backgroundColor: "primary.main", p: 4, color: "white" }}>
            <Typography
              paragraph
              sx={{ textTransform: "uppercase", fontWeight: 500 }}
            >
              Who we are
            </Typography>
            <Typography sx={{ fontWeight: 600 }} component="h3" variant="h4">
              All Types Of Electricity Service Provide Firm
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={7}>
          <Typography component="h2" variant="h4">
            Our Successful History
          </Typography>
          <Typography
            paragraph
            my={2}
            sx={{ color: "text.main", ...theme.typography.body2 }}
          >
            Established in 1986, Mr. Handy is a global franchise organization
            providing electrical installation and repair services. Recognized by
            Entrepreneur among its Franchise. Mr. Handy provide services to both
            residential and commercial almost 200 locations worldwide.
          </Typography>
          <Button
            disableRipple
            endIcon={<ArrowCircleRightRoundedIcon />}
            variant="black-text"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
