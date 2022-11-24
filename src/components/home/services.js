import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { graphql, useStaticQuery } from "gatsby";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { GatsbyImage } from "gatsby-plugin-image";
import { theme } from "../global/layout";
import EicrIcon from "../../images/icons/eicr.svg";

const Services = () => {
  const swiperRef = useRef();

  const data = useStaticQuery(graphql`
    query HomeServicesQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              slideImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
              description
            }
          }
        }
      }
    }
  `);

  const StyledSwiper = styled(Swiper)(({ theme }) => ({
    "& .swiper-wrapper": {
      marginBottom: "20px",
    },
  }));

  const servicesData = data?.allFile?.nodes;
  return (
    <Container sx={{ mt: 10 }}>
      <Stack direction="row" alignItems="center">
        <IconButton
          color="secondary"
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            border: "1px solid",
            borderColor: "border.main",
            marginRight: "20px",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          <ArrowBackRoundedIcon />
        </IconButton>
        <StyledSwiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box>
                <GatsbyImage
                  image={
                    item.childMdx.frontmatter.slideImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt={item.childMdx.frontmatter.title}
                />
              </Box>
              <Box
                sx={{
                  margin: "-60px 0 0 45px",
                  backgroundColor: "white",
                  zIndex: 1,
                  position: "relative",
                  padding: "35px 30px 30px",
                  boxShadow: "0 0 20px 0 rgba(6, 22, 58, 0.11)",
                  clipPath: "inset(0px 0px -25px -25px)",
                }}
              >
                <img
                  src={EicrIcon}
                  style={{ width: "50px", marginBottom: "20px" }}
                  alt=""
                />
                <Typography
                  sx={{
                    fontSize: 22,
                  }}
                  component="h3"
                  variant="h5"
                  color="secondary"
                >
                  {item.childMdx.frontmatter.title}
                </Typography>
                <Typography
                  paragraph
                  my={1}
                  sx={{ color: "text.main", ...theme.typography.body2, mb: 2 }}
                >
                  {item?.childMdx?.frontmatter?.description?.length > 50
                    ? item.childMdx.frontmatter.description.slice(0, 47) + "..."
                    : item.childMdx.frontmatter.description}
                </Typography>
                <Button
                  disableRipple
                  endIcon={
                    <ArrowCircleRightRoundedIcon
                      sx={{ fontSize: "16px!important" }}
                    />
                  }
                  variant="black-text"
                >
                  Learn More
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <IconButton
          color="secondary"
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            border: "1px solid",
            borderColor: "border.main",
            marginLeft: "20px",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          <ArrowForwardRoundedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Services;
