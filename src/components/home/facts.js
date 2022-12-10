import { Box, Typography } from "@mui/material";
import React from "react";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import FactItem from "./fact-item";

const Facts = () => {
  const data = useStaticQuery(graphql`
    query FactsBgQuery {
      file(name: { eq: "facts-bg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const image = data.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage style={{ marginTop: "100px" }} Tag="section" {...bgImage}>
      <Box sx={{ height: "90vh", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 550,
            px: 7,
            pt: 4,
            pb: 2,
            bgcolor: "white",
          }}
        >
          <Typography
            color="secondary"
            component="h3"
            variant="h4"
            fontWeight={600}
            mb={3}
          >
            Some Important Facts
          </Typography>
          <FactItem title="Projects Done" percentage={95} />
          <FactItem title="Projects Done" percentage={95} />

          <FactItem title="Projects Done" percentage={95} />
        </Box>
      </Box>
    </BackgroundImage>
  );
};

export default Facts;
