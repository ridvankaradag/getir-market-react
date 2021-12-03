import {
  Wrapper,
  GroupTitle,
  ScrolledContainer,
  ScrolledGroupWrapper,
  GroupWrapper,
} from "../../components/FilterSortGroup";
import { SearchBox } from "../../components/SearchBox";

interface FilterSortCardType {
  title: string;
  children: React.ReactNode;
}

interface SearchableCardType extends FilterSortCardType {
  hasSearchBox?: boolean;
  searchBoxPlaceholder?: string;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSortCard: React.FC<SearchableCardType> = ({
  children,
  title,
  hasSearchBox,
  searchBoxPlaceholder,
  search,
  setSearch,
}) => (
  <Wrapper>
    <GroupTitle>{title}</GroupTitle>
    {hasSearchBox ? (
      <ScrolledContainer>
        <SearchBox
          placeholder={searchBoxPlaceholder}
          value={search}
          onChange={(e) => setSearch && setSearch(e.target.value)}
        />
        <ScrolledGroupWrapper>{children}</ScrolledGroupWrapper>
      </ScrolledContainer>
    ) : (
      <GroupWrapper>{children}</GroupWrapper>
    )}
  </Wrapper>
);

export default FilterSortCard;
