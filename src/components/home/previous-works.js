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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
