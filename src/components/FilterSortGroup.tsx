import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GroupTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.grayMedium};
`;
const GroupWrapper = styled.div`
  padding: 24px;
`;

type FilterSortCardType = {
  title: string;
  children: React.ReactNode;
};

const FilterSortCard = ({ children, title }: FilterSortCardType) => (
  <Wrapper>
    <GroupTitle>{title}</GroupTitle>
    <GroupWrapper>{children}</GroupWrapper>
  </Wrapper>
);

export default FilterSortCard;
