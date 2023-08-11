import { Categories } from "@/shared/types/productTypes";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function BrandsFilter({ categories }: Categories) {
  const router = useRouter();
  const queryCategories = router.query.categories
    ? router.query.categories?.toString().split(",")
    : [];
  const queryBrands = router.query.brands
    ? router.query.brands?.toString().split(",")
    : [];

  const handleCategoryChange = (categoryName: string) => {
    const updatedBrands = queryBrands.includes(categoryName)
      ? queryBrands.filter((category) => category !== categoryName)
      : [...queryBrands, categoryName];

    const queryObject = {
      ...(queryCategories.length > 0 && {
        categories: queryCategories.join(","),
      }),
      ...(updatedBrands.length > 0 && {
        brands: updatedBrands.join(","),
      }),
    };

    router.push(
      {
        query: queryObject,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <>
      <Typography component="h3" fontSize={18} fontWeight={500}>
        Brands
      </Typography>
      <List dense>
        {categories.map((listItem) => (
          <ListItem key={listItem._id} disableGutters disablePadding>
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                checked={queryBrands.includes(listItem.name)}
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
