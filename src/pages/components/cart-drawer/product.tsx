import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ProductButtons from "./product-buttons";
import Image from "next/image";
import { CartProductProps } from "@/shared/types/product";
import { useAppDispatch } from "@/shared/redux/hooks";
import { deleteFromCart } from "@/shared/redux/slices/cartSlice";

export default function Product({ product }: CartProductProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <ListItem
        disablePadding
        sx={{ px: 3, py: 1.7 }}
        secondaryAction={
          <IconButton onClick={() => dispatch(deleteFromCart(product))}>
            <Close sx={{ fontSize: 16 }} />
          </IconButton>
        }
      >
        <ProductButtons product={product} />

        <Image src={product.images[0]} alt="Tag" width={100} height={100} />
        <Box>
          <ListItemText
            primary={product.name}
            secondaryTypographyProps={{
              fontSize: 12,
              my: 0.5,
            }}
          />
          <Typography sx={{ fontSize: 12, my: 1 }}>
            ${" "}
            {product.discountPrice
              ? product.discountPrice
              : product.regularPrice}{" "}
            x {product.quantity}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            ${" "}
            {product.discountPrice
              ? (product.discountPrice * product.quantity).toFixed(2)
              : (product.regularPrice * product.quantity).toFixed(2)}
          </Typography>
        </Box>
      </ListItem>
      <Divider
        sx={{
          borderBottom: "1px solid rgb(227, 233, 239)",
        }}
      />
    </>
  );
}
