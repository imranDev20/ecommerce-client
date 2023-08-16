import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ProductProps, WishListCardProps } from "@/shared/types/product";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";

const ProductCardButtons = ({ product }: WishListCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {};

  const handleDeleteFromCart = () => {};

  return (
    <Stack justifyContent="flex-end" alignItems="center">
      <>
        <Button
          onClick={handleDeleteFromCart}
          size="small"
          variant="outlined"
          aria-label="remove"
          sx={{ padding: "2px", minWidth: "unset" }}
        >
          <Remove />
        </Button>
        <Typography sx={{ fontSize: "14px", fontWeight: 600, my: 0.5 }}>
          11
        </Typography>
      </>
      <Button
        size="small"
        variant="outlined"
        aria-label="add"
        onClick={handleAddToCart}
        sx={{ padding: "2px", minWidth: "unset" }}
      >
        <Add />
      </Button>
    </Stack>
  );
};

export default ProductCardButtons;
