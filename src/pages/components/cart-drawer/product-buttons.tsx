import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import {
  addToCart,
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "@/shared/redux/slices/cartSlice";
import { CartProductProps } from "@/shared/types/product";
import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";

export default function ProductButtons({ product }: CartProductProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const productInCart = cartItems.find((item) => item._id === product._id);
  const isProductInCart = !!productInCart;

  const handleAddToCart = () => {
    if (isProductInCart) {
      dispatch(incrementQuantity(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemoveFromCart = () => {
    if (productInCart?.quantity && productInCart?.quantity > 1) {
      dispatch(decrementQuantity(product));
    } else {
      dispatch(deleteFromCart(product));
    }
  };

  return (
    <Stack spacing={1} alignItems="center">
      <IconButton
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: 1,
          width: "32px",
          height: "32px",
        }}
        onClick={handleAddToCart}
      >
        <Add sx={{ fontSize: 15, color: "primary.main" }} />
      </IconButton>
      <Box>{product?.quantity}</Box>

      <IconButton
        onClick={handleRemoveFromCart}
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          p: 0.5,
          width: "32px",
          height: "32px",
        }}
      >
        <Remove sx={{ fontSize: 15, color: "primary.main" }} />
      </IconButton>
    </Stack>
  );
}
