import RootLayout from "@/pages/components/layout";
import ProfileLayout from "../components/layout";

type Props = {};
export default function WishListPage({}: Props) {
  return (
    <RootLayout>
      <ProfileLayout>ProfileWishListPage</ProfileLayout>
    </RootLayout>
  );
}
