import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Box, Typography, Button, Container } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { BsArrowRight } from "react-icons/bs";
import HeroRequestService from "./hero-request-service";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const CustomSwiper = styled(Swiper)(() => ({
  height: "95vh",
  maxHeight: 650,
}));

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "hero" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              id
              title
              description
              slideImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const slides = data.allFile.nodes;
  console.log(slides);

  return (
    <section>
      <CustomSwiper
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        // touchRatio={0}
        navigation
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {slides.map((slide) => {
          const slideImage =
            slide.childMdx.frontmatter.slideImage.childImageSharp
              .gatsbyImageData;

          const bgImage = convertToBgImage(slideImage);

          const id = slide.childMdx.frontmatter.id;

          return (
            <SwiperSlide key={id}>
              <BackgroundImage {...bgImage} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "black",
                      opacity: 0.7,
                    },
                  }}
                >
                  <Container sx={{ position: "relative", height: "100%" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        maxWidth: 600,
                        transform: "translateY(-50%)",
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h2"
                        color="white"
                        fontWeight={600}
                        textTransform="uppercase"
                        my={1}
                      >
                        {slide.childMdx.frontmatter.title}
                      </Typography>
                      <Typography variant="p" color="white">
                        {slide.childMdx.frontmatter.description}
                      </Typography>
                      <Button
                        variant="white"
                        endIcon={<BsArrowRight />}
                        sx={{ mt: 3 }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Container>
                  <HeroRequestService />
                </Box>
              </BackgroundImage>
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
    </section>
  );
};

export default Hero;
