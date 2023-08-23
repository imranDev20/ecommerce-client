import Hero from "./components/hero";
import { Container } from "@mui/material";
import { Product, Products } from "@/shared/types/product";
import { getProducts } from "@/shared/services/products";
import FlashDeals from "./components/flash-deals";

export default function HomePage({ products }: Products) {
  return (
    <>
      <Hero />
      <Container sx={{ mt: 7 }}>
        <FlashDeals products={products} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await getProducts();

    if (!response) {
      throw Error();
    }

    const products = response.data;

    return {
      props: {
        products,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

// we will need it in single products page

// export async function getStaticPaths() {
//   const products = await getProducts();

//   if (!products) {
//     throw Error("Products not found");
//   }

//   const productIds: string[] = products.map((product: Product) => product._id);

//   const paths = productIds.map((productId) => ({
//     params: { productId: productId },
//   }));
//   return { paths, fallback: true };
// }
