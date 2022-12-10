import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const WorkingProcess = () => {
  const imageData = useStaticQuery(graphql`
    query FactsBgQuery {
      file(name: { eq: "working-process-bg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  console.log(imageData);

  const data = [{ id: 1, title: "Schedule Your Service" }];
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Typography component="h2" variant="h4">
            Service is Easy & Simple
          </Typography>
          <Button variant="white" sx={{ mt: 3 }}>
            Learn More
          </Button>
        </Grid>
        <Grid item container sm={9}></Grid>
      </Grid>
    </Container>
  );
};

export default WorkingProcess;
