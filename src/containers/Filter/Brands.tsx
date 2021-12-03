import { useState } from "react";
import { FilterState } from "../../@types/filter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CheckboxItem from "../../components/CheckboxItem";
import { removeBrands, addBrands } from "../../features/filter";
import FilterSortCard from "./FilterSortCard";

const Brands = () => {
  const dispatch = useAppDispatch();
  const { brands, selectedBrands } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );

  const [search, setSearch] = useState("");

  return (
    <FilterSortCard
      title="Brands"
      hasSearchBox
      searchBoxPlaceholder="Search brand"
      search={search}
      setSearch={setSearch}
    >
      {brands
        .filter((brand) =>
          brand.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((brand) => (
          <CheckboxItem
            checked={selectedBrands.includes(brand)}
            onChange={(e) =>
              dispatch(
                selectedBrands.includes(brand)
                  ? removeBrands(brand)
                  : addBrands(brand)
              )
            }
            key={brand.name}
            label={brand.name}
          />
        ))}
    </FilterSortCard>
  );
};

export default Brands;
