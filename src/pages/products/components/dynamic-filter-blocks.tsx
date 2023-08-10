import { Category } from "@/shared/types/productTypes";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

type DynamicFilterBlocksProps = {
  title?: string;
  list: Category[] | any[];
};

export default function DynamicFilterBlocks({
  title,
  list,
}: DynamicFilterBlocksProps) {
  console.log(list);
  return (
    <>
      <Typography component="h3" fontSize={18} fontWeight={500}>
        {title}
      </Typography>
      <List dense>
        {list.map((listItem) => (
          <ListItem
            key={listItem._id ? listItem._id : listItem}
            disableGutters
            disablePadding
          >
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox size="small" edge="start" />
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
                  {listItem.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
