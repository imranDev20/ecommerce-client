import withAuth from "@/shared/components/hocs/withAuth";
import ProfileLayout from "../components/layout";

type Props = {};
function AddressesPage({}: Props) {
  return (
    <>
      <ProfileLayout>AddressesPage</ProfileLayout>
    </>
  );
}
export default withAuth(AddressesPage);
