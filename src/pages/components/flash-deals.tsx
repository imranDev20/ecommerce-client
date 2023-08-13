import { Products } from "@/shared/types/productTypes";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../products/components/product-card";
import BoltIcon from "@mui/icons-material/Bolt";

export default function FlashDeals({ products }: Products) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <BoltIcon
          sx={{
            mr: 0.5,
            color: "primary.main",
            fontSize: 30,
          }}
        />
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Flash Deals
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={3} spacing={3} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
