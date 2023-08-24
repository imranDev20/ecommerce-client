import { ChangeEvent, useState } from "react";
import ProfileLayout from "../components/layout";
import PaymentMethodCards from "./components/payment-method-cards";
import { Box, Button, Pagination } from "@mui/material";
import Link from "next/link";
import ProfileHeader from "../components/profile-header";
import withAuth from "@/shared/components/hocs/withAuth";

function PaymentMethodPage() {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <ProfileLayout>
      <ProfileHeader>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/profile/payment-methods/add-method"
        >
          Add Payment Method
        </Button>
      </ProfileHeader>
      <PaymentMethodCards />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <Pagination
          variant="outlined"
          color="primary"
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </ProfileLayout>
  );
}

export default withAuth(PaymentMethodPage);
