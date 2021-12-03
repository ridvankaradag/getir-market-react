import { FilterState } from "../../@types/filter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import RadioItem from "../../components/RadioItem";
import { changeSort } from "../../features/filter";
import FilterSortCard from "./FilterSortCard";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const { sorts, selectedSort } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );
  return (
    <FilterSortCard title="Sorting">
      {sorts.map((sort) => (
        <RadioItem
          key={sort.value}
          onChange={(e) => dispatch(changeSort(sort.value))}
          label={sort.name}
          name="sort"
          checked={selectedSort === sort.value}
        />
      ))}
    </FilterSortCard>
  );
};

export default Sorting;
