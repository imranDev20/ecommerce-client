import Layout from "./components/layout";
import Hero from "./components/hero";
import { Container, Grid } from "@mui/material";
import CategoriesMenu from "./components/categories-menu";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <CategoriesMenu />
          </Grid>
          <Grid item md={9}>
            Product Cards Will go here
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
