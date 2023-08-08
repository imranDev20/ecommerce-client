import { getProducts } from "@/shared/services/products";
import { Products } from "@/shared/types/productTypes";
import { Container, Grid } from "@mui/material";
import ProductCard from "./components/product-card";

export default function ProductsPage({ products }: Products) {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          SIdebar
        </Grid>

        <Grid item container sm={9} spacing={3}>
          {products.map((product) => (
            <Grid item sm={4} key={product._id}>
              <ProductCard key={product._id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await getProducts();
    const products = response.data;

    if (response.success) {
      return {
        props: {
          products,
        },
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err);
  }
};
