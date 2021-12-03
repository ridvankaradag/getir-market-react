import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Brands from "../containers/Filter/Brands";
import Sorting from "../containers/Filter/Sorting";
import Tags from "../containers/Filter/Tags";
import Tag from "./Tag";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "100%",
    left: 0,
    top: 0,
    bottom: 0,
    paddingBottom: "4rem",
  },
};

const ButtonWrapper = styled.a`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

const BlockTag = styled(Tag)`
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BlockTag onClick={() => setIsOpen(true)}>Filter & Sort</BlockTag>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Sorting />
        <Brands />
        <Tags />
        <ButtonWrapper onClick={() => setIsOpen(false)}>Close</ButtonWrapper>
      </Modal>
    </>
  );
};

export default FilterModal;
