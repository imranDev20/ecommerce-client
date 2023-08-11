import { Category } from "@/shared/types/productTypes";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

//We will delete this component later

type DynamicFilterBlocksProps = {
  title?: string;
  list: Category[] | any[];
};

export default function DynamicFilterBlocks({
  title,
  list,
}: DynamicFilterBlocksProps) {
  const router = useRouter();
  const queryCategories = router.query.categories
    ? router.query.categories?.toString().split(",")
    : [];

  const handleCategoryChange = (categoryName: string) => {
    const updatedCategories = queryCategories.includes(categoryName)
      ? queryCategories.filter((category) => category !== categoryName)
      : [...queryCategories, categoryName];

    router.push(
      { query: { categories: updatedCategories.join(",") } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <>
      <Typography component="h3" fontSize={18} fontWeight={500}>
        {title}
      </Typography>
      <List dense>
        {list?.map((listItem) => (
          <ListItem
            key={listItem._id ? listItem._id : listItem}
            disableGutters
            disablePadding
          >
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                checked={queryCategories.includes(listItem.name)}
                size="small"
                edge="start"
                onChange={() => handleCategoryChange(listItem.name)}
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
                  {listItem.name ? listItem.name : listItem}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
