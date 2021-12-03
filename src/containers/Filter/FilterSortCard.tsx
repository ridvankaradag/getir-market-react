import {
  Wrapper,
  GroupTitle,
  ScrolledContainer,
  ScrolledGroupWrapper,
  GroupWrapper,
} from "../../components/FilterSortGroup";
import { SearchBox } from "../../components/SearchBox";

type FilterSortCardType = {
  title: string;
  children: React.ReactNode;
  hasSearchBox?: boolean;
  searchBoxPlaceholder?: string;
};

const FilterSortCard = ({
  children,
  title,
  hasSearchBox,
  searchBoxPlaceholder,
}: FilterSortCardType) => (
  <Wrapper>
    <GroupTitle>{title}</GroupTitle>
    {hasSearchBox ? (
      <ScrolledContainer>
        <SearchBox placeholder={searchBoxPlaceholder} />
        <ScrolledGroupWrapper>{children}</ScrolledGroupWrapper>
      </ScrolledContainer>
    ) : (
      <GroupWrapper>{children}</GroupWrapper>
    )}
  </Wrapper>
);

export default FilterSortCard;
