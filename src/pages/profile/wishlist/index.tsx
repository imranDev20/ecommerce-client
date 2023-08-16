import { getUser } from "@/shared/services/users";
import ProfileLayout from "../components/layout";
import { WishListProps } from "@/shared/types/user";
import ProductCard from "@/pages/products/components/product-card";
import { Grid } from "@mui/material";

export default function WishListPage({ user }: WishListProps) {
  const products = user.wishlistProducts;

  console.log(user);

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

export const getServerSideProps = async () => {
  try {
    const userResponse = await getUser("64dbbef20a7518a817591bb2", "wishlist");
    const user = userResponse.data;

    if (!userResponse?.success) {
      throw Error();
    }

    return {
      props: {
        user: user,
      },
    };
  } catch (error) {
    return {
      props: {
        error: {},
      },
    };
  }
};
