import { useState } from "react";
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
  const [search, setSearch] = useState("");
  return (
    <FilterSortCard
      title="Tags"
      hasSearchBox
      searchBoxPlaceholder="Search tag"
      search={search}
      setSearch={setSearch}
    >
      {tags
        .filter((tag) => tag.name.toLowerCase().includes(search.toLowerCase()))
        .map((tag) => (
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
