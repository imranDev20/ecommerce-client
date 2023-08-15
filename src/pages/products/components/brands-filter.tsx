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
import { useState } from "react";

export default function BrandsFilter({ brands }: Brands) {
  const router = useRouter();
  const queryCategories = router.query.categories
    ? router.query.categories?.toString().split(",")
    : [];
  const queryBrands = router.query.brands
    ? router.query.brands?.toString().split(",")
    : [];

  const [checkedBrands, setCheckedBrands] = useState<string[]>(queryBrands);

  const handleCategoryChange = (categoryName: string) => {
    // Optimistic UI Update
    const updatedCheckedBrands = checkedBrands.includes(categoryName)
      ? checkedBrands.filter((category) => category !== categoryName)
      : [...checkedBrands, categoryName];

    setCheckedBrands(updatedCheckedBrands);

    const queryObject = {
      ...(queryCategories.length > 0 && {
        categories: queryCategories.join(","),
      }),
      ...(updatedCheckedBrands.length > 0 && {
        brands: updatedCheckedBrands.join(","),
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
      <Typography component="h3" fontSize={16} fontWeight={600}>
        Brands
      </Typography>
      <List dense>
        {brands?.map((brand) => (
          <ListItem key={brand._id} disableGutters disablePadding>
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <Checkbox
                checked={checkedBrands.includes(brand.name)}
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
