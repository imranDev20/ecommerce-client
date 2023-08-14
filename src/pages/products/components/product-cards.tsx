import { getProducts } from "@/shared/services/products";
import { Product, ProductsCardProps } from "@/shared/types/productTypes";
import ProductCard from "./product-card";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { useAppSelector } from "@/shared/redux/hooks";

export default function ProductCards({ products, error }: ProductsCardProps) {
  const isCheckboxPressed = useAppSelector((state) => state.filters.isFiltered);
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = router.query;

    const getFilteredProducts = async (query?: {}) => {
      const response = await getProducts(query);
      setFilteredProducts(response.data);
    };

    if (isCheckboxPressed && Object.keys(query).length > 0) {
      getFilteredProducts(query);
    } else if (isCheckboxPressed) {
      getFilteredProducts();
    }
  }, [isCheckboxPressed, router]);

  console.log(filteredProducts);

  if (error) {
    return <>{error}</>;
  }

  if (filteredProducts?.length > 0) {
    return (
      <>
        {filteredProducts.map((product) => (
          <Grid item sm={4} key={product._id}>
            <ProductCard key={product._id} product={product} />
          </Grid>
        ))}
      </>
    );
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
