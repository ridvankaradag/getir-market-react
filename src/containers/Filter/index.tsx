import { useEffect } from "react";
import { FilterState } from "../../@types/filter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CheckboxItem from "../../components/CheckboxItem";
import FilterSortCard from "../../components/FilterSortGroup";
import RadioItem from "../../components/RadioItem";
import {
  addBrands,
  addTags,
  changeSort,
  getFiltersSuccess,
  hasError,
  removeBrands,
  removeTags,
  startLoading,
} from "../../features/filter";
import { getMetadata } from "../../utils/services";

const FilterContainer = () => {
  const dispatch = useAppDispatch();
  const {
    brands,
    tags,
    itemTypes,
    sorts,
    isLoading,
    error,
    selectedBrands,
    selectedSort,
    selectedTags,
  } = useAppSelector((state: { filter: FilterState }) => state.filter);

  console.log(selectedBrands, selectedSort, selectedTags);
  useEffect(() => {
    (async function init() {
      dispatch(startLoading());
      const { error, data } = await getMetadata();
      if (error) {
        dispatch(hasError(data));
      } else {
        dispatch(getFiltersSuccess(data));
      }
    })();
  }, [dispatch]);
  return (
    <>
      <FilterSortCard title="Sorting">
        {sorts.map((sort) => (
          <RadioItem
            onChange={(e) => dispatch(changeSort(sort.value))}
            label={sort.name}
            name="sort"
            checked={selectedSort === sort.value}
          />
        ))}
      </FilterSortCard>
      <FilterSortCard title="Brands">
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
      <FilterSortCard title="Tags">
        {tags.map((tag) => (
          <CheckboxItem
            checked={selectedTags.includes(tag)}
            onChange={(e) =>
              dispatch(
                selectedTags.includes(tag) ? removeTags(tag) : addTags(tag)
              )
            }
            key={tag.name}
            label={tag.name}
          />
        ))}
      </FilterSortCard>
    </>
  );
};

export default FilterContainer;
