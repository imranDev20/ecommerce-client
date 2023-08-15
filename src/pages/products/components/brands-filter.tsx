import { Brands } from "@/shared/types/brand";
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

export default function BrandsFilter({ brands }: Brands) {
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
        shallow: false,
      }
    );
  };

  return (
    <>
      <Typography component="h3" fontSize={18} fontWeight={500}>
        Brands
      </Typography>
      <List dense>
        {brands?.map((brand) => (
          <ListItem key={brand._id} disableGutters disablePadding>
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                checked={queryBrands.includes(brand.name)}
                size="small"
                edge="start"
                onChange={() => handleCategoryChange(brand.name)}
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
                  {brand.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
