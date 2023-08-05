import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const payments = [
  {
    id: "1",
    name: "Ralf Edward",
    image: "https://bazaar.ui-lib.com/assets/images/payment-methods/Amex.svg",
    number: "1234 **** **** ****",
    date: "08 / 2022",
  },
  {
    id: "2",
    name: "Ralf Edward",
    image:
      "https://bazaar.ui-lib.com/assets/images/payment-methods/Mastercard.svg",
    number: "1234 **** **** ****",
    date: "10 / 2025",
  },
  {
    id: "3",
    name: "Ralf Edward",
    image: "https://bazaar.ui-lib.com/assets/images/payment-methods/PayPal.svg",
    number: "ui-lib@email.com",
    date: "N/A",
  },
  {
    id: "4",
    name: "Ralf Edward",
    image: "https://bazaar.ui-lib.com/assets/images/payment-methods/Visa.svg",
    number: "1234 **** **** ****",
    date: "08 / 2022",
  },
];

export default function PaymentMethodCards() {
  return (
    <>
      <Box>
        {payments.map((payment) => (
          <Card key={payment.id} sx={{ my: 2 }}>
            <CardContent
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "0px",
                }}
              >
                <Box sx={{ widht: "42px", height: "28px" }}>
                  <CardMedia
                    sx={{ width: "100%" }}
                    component="img"
                    image={payment.image}
                    alt="card"
                  />
                </Box>
                <Typography
                  sx={{
                    margin: "6px",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#2b3445",
                  }}
                >
                  {payment.name}
                </Typography>
              </Box>

              <Typography
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "0px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#2b3445",
                  margin: "6px",
                }}
              >
                {payment.number}
              </Typography>
              <Typography
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "0px",
                  fontSize: "14px",
                  fontWeight: 400,
                  margin: "6px",
                  color: "#2b3445",
                }}
              >
                {payment.date}
              </Typography>
              <Box>
                <IconButton aria-label="edit" size="large">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
