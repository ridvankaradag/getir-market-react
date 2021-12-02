import styled from "styled-components";
import { FilterState } from "../../@types/filter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Tag from "../../components/Tag";
import { changeItemType } from "../../features/filter";

const TagWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 8px;
`;

const TagList = () => {
  const dispatch = useAppDispatch();
  const { itemTypes, selectedItemType } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );

  return (
    <TagWrapper>
      {itemTypes.map((type) => (
        <Tag
          onClick={() => dispatch(changeItemType(type.name))}
          active={selectedItemType === type.name}
          key={type.name}
        >
          {type.name}
        </Tag>
      ))}
    </TagWrapper>
  );
};

export default TagList;
