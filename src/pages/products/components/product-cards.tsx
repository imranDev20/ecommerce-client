import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const product = {
  name: "Apple iPhone 15",
  description: "description",
  regularPrice: 312299,
  offerPrice: 289999,
  unit: "pcs",
  image:
    "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=640&q=75",
  brand: "Sony",
  rating: 4.4,
  stock: 200,
  attributes: [
    {
      name: "color",
      value: ["black", "white"],
      unit: "",
    },
    {
      name: "size",
      value: ["32", "48"],
      unit: "inches",
    },
  ],
};

export default function ProductCards() {
  return (
    <Card sx={{ p: 0, position: "relative" }}>
      {/* <Link href={`/products/${slug}-${product._id}`}>
        <Box sx={{ height: 283, position: "relative" }}>
          <Image src={product.image} alt={product.name} fill quality={100} />
        </Box>
      </Link> */}

      <Box sx={{ height: 283, position: "relative" }}>
        <Image src={product.image} alt={product.name} fill quality={100} />
      </Box>

      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "10px",
          paddingX: "10px",
          paddingY: "4px",
          backgroundColor: "#4E97FD",
          color: "white",
          borderRadius: "16px",
          fontWeight: 600,
        }}
      >
        25% off
      </Typography>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {product.name}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Rating
              size="small"
              name="read-only"
              value={product.rating}
              precision={0.1}
              readOnly
            />
            <Box sx={{ ml: 0.5 }}>({product.rating})</Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "4px",
            }}
          >
            <Typography
              sx={{
                color: "#4E97FD",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              US{product.offerPrice}
            </Typography>
            <Typography
              sx={{
                color: "#7d879c",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "line-through",
              }}
            >
              {product.regularPrice}
            </Typography>
          </Box>
        </Box>

        {/* <ProductCardButtons product={product} /> */}
      </CardContent>
    </Card>
  );
}
