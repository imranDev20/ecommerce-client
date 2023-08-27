import { ProductProps, WishListCardProps } from "@/shared/types/product";
import { slugifyTitle } from "@/shared/utils/functions";
import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import ProductCardButtons from "./product-card-buttons";

export default function ProductCard({
  product,
}: WishListCardProps | ProductProps) {
  if (product && Object.keys(product).length > 0) {
    const slug = slugifyTitle(product?.name as string);

    return (
      <Card sx={{ p: 0, position: "relative" }}>
        <Link href={`/products/${slug}-${product._id}`}>
          <Box sx={{ height: 283, position: "relative" }}>
            {product?.images && (
              <Image
                src={product?.images[0]}
                alt={product?.name as string}
                fill
                quality={100}
              />
            )}
          </Box>
        </Link>

        {product.discountPercentage && (
          <Typography
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "11px",
              paddingX: "10px",
              paddingY: "4px",
              backgroundColor: "#4E97FD",
              color: "white",
              borderRadius: "16px",
              fontWeight: 600,
            }}
          >
            {Math.round(product.discountPercentage)}% off
          </Typography>
        )}

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: 121,
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

            <Rating
              size="small"
              name="read-only"
              value={product.rating}
              precision={0.1}
              readOnly
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              {product.discountPrice && (
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  $
                  <NumericFormat
                    value={product.discountPrice}
                    displayType="text"
                    thousandSeparator=","
                    decimalScale={2}
                  />
                </Typography>
              )}

              <Typography
                sx={{
                  color: !product.discountPrice ? "primary.main" : "#7d879c",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: product.discountPrice
                    ? "line-through"
                    : "none",
                }}
              >
                $
                <NumericFormat
                  value={product.regularPrice}
                  displayType="text"
                  thousandSeparator=","
                  decimalScale={2}
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
