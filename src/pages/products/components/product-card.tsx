import { ProductProps } from "@/shared/types/product";
import { slugifyTitle } from "@/shared/utils/functions";
import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import ProductCardButtons from "./product-card-buttons";

export default function ProductCard({ product }: ProductProps) {
  if (product && Object.keys(product).length > 0) {
    const slug = slugifyTitle(product?.name);

    return (
      <Card sx={{ p: 0, position: "relative" }}>
        <Link href={`/products/${slug}-${product._id}`}>
          <Box sx={{ height: 283, position: "relative" }}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              quality={100}
            />
          </Box>
        </Link>

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
              <Typography sx={{ ml: 1, color: "#7d879c", fontSize: 14 }}>
                ({product.rating})
              </Typography>
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
                $
                <NumericFormat
                  value={product.discountPrice}
                  displayType="text"
                  allowLeadingZeros
                  thousandSeparator=","
                />
              </Typography>
              <Typography
                sx={{
                  color: "#7d879c",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "line-through",
                }}
              >
                $
                <NumericFormat
                  value={product.regularPrice}
                  displayType="text"
                  allowLeadingZeros
                  thousandSeparator=","
                />
              </Typography>
            </Box>
          </Box>

          <ProductCardButtons product={product} />
        </CardContent>
      </Card>
    );
  }
}
