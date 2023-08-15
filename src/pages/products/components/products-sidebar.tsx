import { Card, CardContent, Divider } from "@mui/material";
import CategoriesFilter from "./categories-filter";
import BrandsFilter from "./brands-filter";
import { ProductsSidebarProps } from "@/shared/types/global";
import RandomFilters from "./random-filters";
import RatingsFilter from "./ratings-filter";

export default function ProductsSidebar({
  categories,
  brands,
}: ProductsSidebarProps) {
  return (
    <Card sx={{ p: 1.5 }}>
      <CardContent>
        <CategoriesFilter categories={categories} />

        <Divider sx={{ my: 2 }} />
        <BrandsFilter brands={brands} />

        <Divider sx={{ my: 2 }} />

        <RandomFilters />
        <Divider sx={{ my: 2 }} />

        <RatingsFilter />
      </CardContent>
    </Card>
  );
}
