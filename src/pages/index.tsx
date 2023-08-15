import Hero from "./components/hero";
import { Container } from "@mui/material";
import { Products } from "@/shared/types/product";
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

export const getServerSideProps = async () => {
  const response = await getProducts();

  const products = response.data;

  return {
    props: {
      products,
    },
  };
};
