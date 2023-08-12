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

  try {
    let filteredProductsResponse;
    let productsResponse;
    let categoriesResponse;

    if (query && Object.keys(query).length !== 0) {
      filteredProductsResponse = await getProducts(query);
    } else {
      productsResponse = await getProducts();
    }

    categoriesResponse = await getCategories();

    const filteredProducts = filteredProductsResponse?.data || [];
    const products = productsResponse?.data || [];
    const categories = categoriesResponse?.data || [];

    if (
      (filteredProductsResponse?.success || productsResponse?.success) &&
      categoriesResponse?.success
    ) {
      return {
        props: {
          products: filteredProducts.length > 0 ? filteredProducts : products,
          categories,
        },
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
