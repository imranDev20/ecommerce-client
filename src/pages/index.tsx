import Hero from "./components/hero";
import { Container, Grid } from "@mui/material";
import CategoriesMenu from "./components/categories-menu";
import ProductCard from "./products/components/product-card";
import { Products } from "@/shared/types/productTypes";
import { getProducts } from "@/shared/services/products";

export default function HomePage({ products }: Products) {
  return (
    <>
      <Hero />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <CategoriesMenu />
          </Grid>
          <Grid item md={9} container spacing={3}>
            {products.map((product) => (
              <Grid item sm={4} key={product._id}>
                <ProductCard key={product._id} product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await getProducts();

  const products = response.data;

  return {
    props: {
      products,
    },
  };
};
