import { FilterState } from "../../@types/filter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CheckboxItem from "../../components/CheckboxItem";
import { removeTags, addTags } from "../../features/filter";
import FilterSortCard from "./FilterSortCard";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags, selectedTags } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );
  return (
    <FilterSortCard title="Tags" hasSearchBox searchBoxPlaceholder="Search tag">
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
  );
};

export default Tags;
