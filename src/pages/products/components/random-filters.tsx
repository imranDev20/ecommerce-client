import { Category } from "@/shared/types/product";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function RandomFilters() {
  const router = useRouter();

  const handleCategoryChange = (filter: string) => {};

  return (
    <>
      <List dense>
        {["On Sale", "In Stock", "Featured"]?.map((item) => (
          <ListItem key={item} disableGutters disablePadding>
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                size="small"
                edge="start"
                onChange={() => handleCategoryChange(item)}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: 15,
                  }}
                >
                  {item}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
