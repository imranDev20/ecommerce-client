import React from "react";
import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ProductProps, WishListCardProps } from "@/shared/types/product";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import {
  addToCart,
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
  toggleCartDrawer,
} from "@/shared/redux/slices/cartSlice";

const ProductCardButtons = ({ product }: WishListCardProps | ProductProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const productInCart = cartItems.find((item) => item._id === product._id);
  const isProductInCart = !!productInCart;

  const handleAddToCart = () => {
    if (isProductInCart) {
      dispatch(incrementQuantity(product));
    } else {
      dispatch(addToCart(product));
      dispatch(toggleCartDrawer());
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
    <Stack justifyContent="flex-end" alignItems="center">
      {isProductInCart ? (
        <>
          <Button
            onClick={handleRemoveFromCart}
            size="small"
            variant="outlined"
            aria-label="remove"
            sx={{ padding: "2px", minWidth: "unset" }}
          >
            <Remove />
          </Button>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, my: 0.5 }}>
            {productInCart?.quantity ? productInCart?.quantity : 0}
          </Typography>
        </>
      ) : null}

      <Tooltip
        title={
          product.stock === 0
            ? "Stock depleted"
            : productInCart?.quantity === product.stock
            ? "No more item in stock"
            : ""
        }
        placement="bottom"
      >
        <span>
          <Button
            disabled={
              product.stock === 0 || productInCart?.quantity === product.stock
                ? true
                : false
            }
            size="small"
            variant="outlined"
            aria-label="add"
            onClick={handleAddToCart}
            sx={{ padding: "2px", minWidth: "unset" }}
          >
            <Add />
          </Button>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default ProductCardButtons;
