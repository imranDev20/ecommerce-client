import { Categories } from "@/shared/types/product";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CategoriesFilter({ categories }: Categories) {
  const [checked, setChecked] = useState<boolean>(false);
  const router = useRouter();

  const queryCategories = router.query.categories
    ? router.query.categories?.toString().split(",")
    : [];
  const queryBrands = router.query.brands
    ? router.query.brands?.toString().split(",")
    : [];

  const [checkedCategories, setCheckedCategories] =
    useState<string[]>(queryCategories);

  const handleCategoryChange = (categoryName: string) => {
    // Optimistic UI update
    const updatedCheckedCategories = checkedCategories.includes(categoryName)
      ? checkedCategories.filter((category) => category !== categoryName)
      : [...checkedCategories, categoryName];

    setCheckedCategories(updatedCheckedCategories);

    const queryObject = {
      ...(updatedCheckedCategories.length > 0 && {
        categories: updatedCheckedCategories.join(","),
      }),

      ...(queryBrands.length > 0 && {
        brands: queryBrands.join(","),
      }),
    };

    router.push(
      {
        query: queryObject,
      },
      undefined,
      {
        shallow: false,
      }
    );
  };

  return (
    <>
      <Typography component="h3" fontSize={18} fontWeight={500}>
        Categories
      </Typography>
      <List dense>
        {categories?.map((listItem) => (
          <ListItem key={listItem._id} disableGutters disablePadding>
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                checked={checkedCategories.includes(listItem.name)}
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
