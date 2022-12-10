import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import { BsPerson, BsPhone } from "react-icons/bs";
import { theme } from "../global/layout";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Reviews from "./reviews";
import CallCenterIcon from "../../images/icons/call-center.svg";
import { convertToBgImage } from "gbimage-bridge";
import { graphql, useStaticQuery } from "gatsby";

import "swiper/css";
import BackgroundImage from "gatsby-background-image";

const Contact = () => {
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
    <Container sx={{ mt: "-100px", position: "relative", zIndex: 1 }}>
      <Grid
        container
        spacing={0}
        sx={{
          boxShadow: "0 0 9px 0 rgba(29, 33, 67, 0.10)",
        }}
      >
        <Grid item sm={6} sx={{ backgroundColor: "primary.main" }}>
          <BackgroundImage {...bgImage}>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                color: "white",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "primary.main",
                  opacity: 0.9,
                },
              }}
            >
              <Reviews />
              <Divider
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                }}
              />
              <Box sx={{ p: 7, position: "relative", zIndex: 1 }}>
                <Stack direction="row" alignItems="center">
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      width: 60,
                      height: 60,
                      mr: 3,
                    }}
                    src={CallCenterIcon}
                  />

                  <Box sx={{ color: "white" }}>
                    <Typography>
                      Need a service & ready to book? Call us
                    </Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                      Toll Free Number:{" "}
                      <Link
                        sx={{
                          color: "white",
                          "&:hover": {
                            textDecoration: "none",
                          },
                        }}
                        href="tel:180012457890"
                      >
                        1800 1245 7890
                      </Link>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </BackgroundImage>
        </Grid>
        <Grid item sm={6} sx={{ backgroundColor: "white", p: 7 }}>
          <Typography component="h2" variant="h4">
            Get in Touch with Us
          </Typography>
          <Typography
            paragraph
            sx={{
              color: "text.main",
              ...theme.typography.body2,
              my: 3,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Like what you’ve seen so far? What you’ve seen on our website is
            only the tip! To know more kindly drop us request.
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <TextField
                fullWidth
                placeholder="Enter Name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <BsPerson />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
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
            <Grid item sm={6}>
              <TextField
                fullWidth
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
            <Grid item sm={6}>
              <TextField
                fullWidth
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

            <Grid item sm={12}>
              <TextField
                placeholder="Enter Name"
                variant="outlined"
                fullWidth
                multiline
                sx={{
                  ".MuiInputBase-root": {
                    display: "flex",
                    alignItems: "start",
                  },
                }}
                minRows={3}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mt: 2.7 }}>
                      <BsPerson />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="orange"
                color="primary"
                endIcon={<ArrowCircleRightRoundedIcon />}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
