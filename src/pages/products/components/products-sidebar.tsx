import { Card, CardContent, Divider } from "@mui/material";
import DynamicFilterBlocks from "./dynamic-filter-blocks";
import { Categories } from "@/shared/types/productTypes";
import CategoriesFilter from "./categories-filter";
import BrandsFilter from "./brands-filter";

export default function ProductsSidebar({ categories }: Categories) {
  return (
    <Card sx={{ p: 1.5 }}>
      <CardContent>
        <CategoriesFilter categories={categories} />

        <Divider sx={{ my: 2 }} />
        <BrandsFilter categories={categories} />

        <Divider sx={{ my: 2 }} />

        <DynamicFilterBlocks list={["On Sale", "In Stock", "Features"]} />
        <Divider sx={{ my: 2 }} />

        <DynamicFilterBlocks title="Ratings" list={["star", "red dwarf"]} />
      </CardContent>
    </Card>
  );
}
