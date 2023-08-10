import { getProducts } from "@/shared/services/products";
import { ProductPageProps } from "@/shared/types/productTypes";
import { Container, Grid } from "@mui/material";
import ProductCard from "./components/product-card";
import ProductsSidebar from "./components/products-sidebar";
import { getCategories } from "@/shared/services/categories";

export default function ProductsPage({
  products,
  categories,
}: ProductPageProps) {
  console.log(categories);
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <ProductsSidebar categories={categories} />
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
    const productsResponse = await getProducts();
    const products = productsResponse.data;

    const categoriesResponse = await getCategories();
    const categories = categoriesResponse.data;

    if (productsResponse.success && categoriesResponse.success) {
      return {
        props: {
          products,
          categories,
        },
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err);
  }
};
