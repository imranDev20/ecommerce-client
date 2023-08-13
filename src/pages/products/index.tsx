import { getProducts } from "@/shared/services/products";
import { ProductsPageProps } from "@/shared/types/productTypes";
import { Container, Grid } from "@mui/material";
import ProductsSidebar from "./components/products-sidebar";
import { getCategories } from "@/shared/services/categories";
import { NextPageContext } from "next";
import ProductCards from "./components/product-cards";

export default function ProductsPage({
  products,
  categories,
  error,
}: ProductsPageProps) {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          {categories && <ProductsSidebar categories={categories} />}
        </Grid>

        <Grid item container sm={9} spacing={3}>
          <ProductCards products={products} error={error} />
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

    console.log(
      filteredProductsResponse?.success,
      productsResponse?.success,
      categoriesResponse?.success
    );

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
      throw Error();
    }
  } catch (error) {
    return {
      props: { error: error instanceof Error ? error.message : String(error) },
    };
  }
};
