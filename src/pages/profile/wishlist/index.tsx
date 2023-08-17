import { getUser } from "@/shared/services/users";
import ProfileLayout from "../components/layout";
import { WishListProps } from "@/shared/types/user";
import ProductCard from "@/pages/products/components/product-card";
import { Grid } from "@mui/material";
import { NextPageContext } from "next";
import useNavigation from "@/shared/hooks/useNavigation";

export default function WishListPage({ user }: WishListProps) {
  useNavigation("/profile/wishlist");

  const products = user && user.wishlistProducts;

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

export const getServerSideProps = async (context: NextPageContext) => {
  const email = context.query.email as string;

  try {
    const userResponse = await getUser(email, "wishlist");
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
