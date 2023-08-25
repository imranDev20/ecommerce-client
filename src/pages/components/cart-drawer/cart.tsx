import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Product from "./product";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import { toggleCartDrawer } from "@/shared/redux/slices/cartSlice";
import { CartProduct } from "@/shared/types/product";
import Link from "next/link";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List>
        <ListItem
          secondaryAction={
            <IconButton onClick={() => dispatch(toggleCartDrawer())}>
              <CloseIcon />
            </IconButton>
          }
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ShoppingBasketOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography fontWeight={600}>{cartItems.length} Items</Typography>
            }
          />
        </ListItem>
        <Divider />

        {cartItems.map((item: CartProduct) => (
          <Product key={item._id} product={item} />
        ))}
      </List>

      <Stack
        sx={{
          px: 3,
          mt: "auto",
          pt: 3,
          pb: 3,
        }}
        spacing={1}
      >
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/quick-checkout"
          onClick={() => dispatch(toggleCartDrawer())}
        >
          Checkout Now
        </Button>
        <Button variant="outlined">View Cart</Button>
      </Stack>
    </Box>
  );
}
