import { Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import Masonry from "react-masonry-css";
import "../../styles/masonry.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviousWorks = () => {
  const data = useStaticQuery(graphql`
    query PreviousWorksQuery {
      allFile(
        sort: { atime: ASC }
        filter: { sourceInstanceName: { eq: "portfolio" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 1280)
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;
  return (
    <Container sx={{ mt: 10 }}>
      <Typography component="h2" variant="h4" textAlign="center">
        Project We Have Done
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
        To keep things simple we've created one website builder package that
        includes everything you need to get online & start growing your
        business.
      </Typography>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item) => (
          <GatsbyImage
            image={item.childImageSharp.gatsbyImageData}
            alt="something"
          />
        ))}
      </Masonry>
    </Container>
  );
};

export default PreviousWorks;

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};
