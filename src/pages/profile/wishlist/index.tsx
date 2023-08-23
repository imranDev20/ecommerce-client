import ProfileLayout from "../components/layout";
import ProductCard from "@/pages/products/components/product-card";
import { useGetAggregatedLoggedInUserQuery } from "@/shared/redux/api/usersApiSlice";
import { Grid } from "@mui/material";

export default function WishListPage() {
  const { data: user } = useGetAggregatedLoggedInUserQuery({
    aggregate: "wishlist",
  });

  const products = user?.wishlistProducts;

  console.log(products);

  return (
    <ProfileLayout>
      <Grid container spacing={3}>
        {products &&
          products.map((item) => (
            <Grid item md={4} key={item._id}>
              <ProductCard product={item} />
            </Grid>
          ))}
      </Grid>
    </ProfileLayout>
  );
}
