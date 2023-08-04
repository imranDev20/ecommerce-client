import RootLayout from "@/pages/components/layout";
import ProfileLayout from "../components/layout";

type Props = {};
export default function OrdersPage({}: Props) {
  return (
    <RootLayout>
      <ProfileLayout>ProfileOrdersPage</ProfileLayout>
    </RootLayout>
  );
}
