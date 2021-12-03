import { QueryParamsType } from "../@types/query";

export const queryParamsGenerator = ({
  currentPage,
  selectedBrands,
  selectedTags,
  selectedItemType,
  selectedSort,
}: QueryParamsType) => {
  let query = `&_page=${currentPage}`;
  selectedBrands
    .filter((brand) => brand.name !== "All")
    .map((brand) => {
      return (query += `&manufacturer_like=${brand.name}`);
    });
  selectedTags
    .filter((tag) => tag.name !== "All")
    .map((tag) => {
      return (query += `&tags_like=${tag.name}`);
    });

  if (selectedItemType !== "") {
    query += `&itemType_like=${selectedItemType}`;
  }

  if (selectedSort !== "") {
    query += `&${selectedSort}`;
  }
  return query;
};
