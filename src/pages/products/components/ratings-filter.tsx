import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function RatingsFilter() {
  const router = useRouter();

  const handleCategoryChange = (filter: number) => {};

  const starsArray = Array(5).fill("⭐️");

  return (
    <>
      <Typography component="h3" fontSize={16} fontWeight={600}>
        Ratings
      </Typography>
      <List dense>
        {[5, 4, 3, 2, 1]?.map((item) => (
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
                  <Rating
                    readOnly
                    name="size-small"
                    defaultValue={item}
                    size="small"
                  />
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
