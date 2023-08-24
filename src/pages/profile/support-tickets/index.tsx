import withAuth from "@/shared/components/hocs/withAuth";
import ProfileLayout from "../components/layout";

type Props = {};
function SupportTicketPage({}: Props) {
  return <ProfileLayout>SupportTicketPage</ProfileLayout>;
}

export default withAuth(SupportTicketPage);
