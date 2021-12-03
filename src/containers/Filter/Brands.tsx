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
  return (
    <FilterSortCard
      title="Brands"
      hasSearchBox
      searchBoxPlaceholder="Search brand"
    >
      {brands.map((brand) => (
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
