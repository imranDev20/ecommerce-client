import { Container, Grid } from "@mui/material";
import YourOrders from "./components/your-orders";
import PaymentDetails from "./components/payment-details";
import DeliveryTime from "./components/delivery-time";
import DeliveryAddress from "./components/delivery-address";
import withAuth from "@/shared/components/hocs/withAuth";

function QuickCheckoutPage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <DeliveryTime />
          <DeliveryAddress />
          <PaymentDetails />
        </Grid>
        <Grid item md={4}>
          <YourOrders />
        </Grid>
      </Grid>
    </Container>
  );
}
export default withAuth(QuickCheckoutPage);
