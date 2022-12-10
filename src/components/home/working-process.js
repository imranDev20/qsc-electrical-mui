import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import CalendarIcon from "../../images/icons/calendar.svg";
import HeadphoneIcon from "../../images/icons/headphone.svg";
import ElectricianIcon from "../../images/icons/electrician.svg";

const WorkingProcess = () => {
  const background = useStaticQuery(graphql`
    query WorkingProcessBgImage {
      file(name: { eq: "working-process-bg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const image = background.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  const data = [
    {
      id: 1,
      title: "Schedule Your Service",
      desc: "Call us now to schedule a visit from our electricians.",
      icon: CalendarIcon,
    },
    {
      id: 2,
      title: "Get Professional Advices",
      desc: "Our electricians will suggest you the best options to choose from",
      icon: HeadphoneIcon,
    },
    {
      id: 3,
      title: "Get Services at Your Doorstep",
      desc: "We are just one call away from you for any electrical solution.",
      icon: ElectricianIcon,
    },
  ];
  return (
    <BackgroundImage style={{ marginTop: "100px" }} Tag="section" {...bgImage}>
      <Box
        sx={{
          height: "100%",
          position: "relative",
          pt: 5,
          pb: 25,
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#2b2b2b",
            opacity: 0.9,
          },
        }}
      >
        <Container sx={{ mt: 10, position: "relative", zIndex: 1 }}>
          <Grid container spacing={6}>
            <Grid item sm={3}>
              <Typography
                paragraph
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "primary.main",
                }}
              >
                How we work
              </Typography>
              <Typography component="h2" variant="h4" color="white">
                Service is Easy & Simple
              </Typography>
              <Button variant="white" sx={{ mt: 5 }}>
                Learn More
              </Button>
            </Grid>
            <Grid item container sm={9} spacing={3}>
              {data.map((item) => (
                <Grid item sm={4} sx={{ color: "white" }}>
                  <img
                    src={item.icon}
                    style={{ width: 60, height: "auto", marginBottom: 25 }}
                  />
                  <Typography
                    component="h4"
                    variant="h6"
                    sx={{ fontSize: "20px", mb: 3 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography paragraph>{item.desc}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BackgroundImage>
  );
};

export default WorkingProcess;
