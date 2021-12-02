import CheckboxItem from "../../components/CheckboxItem";
import FilterSortCard from "../../components/FilterSortGroup";
import RadioItem from "../../components/RadioItem";

const FilterContainer = () => (
  <>
    <FilterSortCard title="Sorting">
      <RadioItem label="Sort" />
    </FilterSortCard>
    <FilterSortCard title="Brands">
      <CheckboxItem label="Check" />
    </FilterSortCard>
    <FilterSortCard title="Tags">1</FilterSortCard>
  </>
);

export default FilterContainer;
