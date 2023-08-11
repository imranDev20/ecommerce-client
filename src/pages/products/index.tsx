import { getProducts } from "@/shared/services/products";
import { ProductsPageProps } from "@/shared/types/productTypes";
import { Container, Grid } from "@mui/material";
import ProductCard from "./components/product-card";
import ProductsSidebar from "./components/products-sidebar";
import { getCategories } from "@/shared/services/categories";
import { NextPageContext } from "next";

export default function ProductsPage({
  products,
  categories,
}: ProductsPageProps) {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          {categories && <ProductsSidebar categories={categories} />}
        </Grid>

        <Grid item container sm={9} spacing={3}>
          {products &&
            products.map((product) => (
              <Grid item sm={4} key={product._id}>
                <ProductCard key={product._id} product={product} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  console.log(query);

  try {
    if (query.categories) {
      return {
        props: {
          hello: "hi",
        },
      };
    } else {
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
    }
  } catch (err) {
    console.log(err);
  }
};
