import { Button } from "@mui/material";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Button variant="contained">This is a fucking button</Button>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
