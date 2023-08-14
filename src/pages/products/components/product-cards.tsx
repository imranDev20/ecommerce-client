import { ProductsCardProps } from "@/shared/types/productTypes";
import ProductCard from "./product-card";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

export default function ProductCards({ products, error }: ProductsCardProps) {
  const router = useRouter();

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      {products &&
        products.map((product) => (
          <Grid item sm={4} key={product._id}>
            <ProductCard key={product._id} product={product} />
          </Grid>
        ))}
    </>
  );
}
