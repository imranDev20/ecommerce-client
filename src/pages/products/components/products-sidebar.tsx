import { Card, CardContent, Divider } from "@mui/material";
import DynamicFilterBlocks from "./dynamic-filter-blocks";
import CategoriesFilter from "./categories-filter";
import BrandsFilter from "./brands-filter";
import { ProductsSidebarProps } from "@/shared/types/global";

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

        <DynamicFilterBlocks list={["On Sale", "In Stock", "Features"]} />
        <Divider sx={{ my: 2 }} />

        <DynamicFilterBlocks title="Ratings" list={["star", "red dwarf"]} />
      </CardContent>
    </Card>
  );
}
