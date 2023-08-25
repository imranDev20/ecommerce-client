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
import { useAppSelector } from "@/shared/redux/hooks";

export default function Cart() {
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
            <IconButton aria-label="comment">
              <CloseIcon />
            </IconButton>
          }
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ShoppingBasketOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight={600}>3 Items</Typography>}
          />
        </ListItem>
        <Divider />

        {cartItems.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </List>

      <Stack
        sx={{
          px: 3,
          mt: 3,
          pb: 3,
        }}
        spacing={1}
      >
        <Button variant="contained">Checkout Now</Button>
        <Button variant="outlined">View Cart</Button>
      </Stack>
    </Box>
  );
}
