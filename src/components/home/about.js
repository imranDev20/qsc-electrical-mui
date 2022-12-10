import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { theme } from "../global/layout";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const About = () => {
  const background = useStaticQuery(graphql`
    query AboutBgImage {
      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const image = background.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Grid container spacing={5}>
        <Grid item sm={5}>
          <BackgroundImage {...bgImage}>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                p: 4,
                color: "white",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "primary.main",
                  opacity: 0.8,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  paragraph
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Who we are
                </Typography>
                <Typography
                  sx={{ fontWeight: 600 }}
                  component="h3"
                  variant="h4"
                >
                  All Types Of Electricity Service Provide Firm
                </Typography>
              </Box>
            </Box>
          </BackgroundImage>
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
