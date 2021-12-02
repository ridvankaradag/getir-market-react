import styled from "styled-components";
import Tag from "../../components/Tag";

const TagWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 8px;
`;

const TagList = () => (
  <TagWrapper>
    <Tag>mug</Tag>
    <Tag active>shirt</Tag>
  </TagWrapper>
);

export default TagList;
