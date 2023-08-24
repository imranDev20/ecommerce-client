import ProfileLayout from "../components/layout";
import ProductCard from "@/pages/products/components/product-card";
import withAuth from "@/shared/components/hocs/withAuth";
import { useGetAggregatedLoggedInUserQuery } from "@/shared/redux/api/endpoints/users";
import { Grid } from "@mui/material";

function WishListPage() {
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

export default withAuth(WishListPage);
