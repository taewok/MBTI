import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";

const PrevBtn = ({ pageNum, mbtiList, setMbtiList }) => {
  const navigate = useNavigate();

  const PrevBtnOnClick = () => {
    mbtiList.pop();
    setMbtiList(mbtiList);
    navigate(`/question/${pageNum - 1}`);
  };

  return (
    <>
      {pageNum !== 1 ? (
        <PrevButton onClick={() => PrevBtnOnClick()}>
          <GoArrowLeft />
        </PrevButton>
      ) : null}
    </>
  );
};

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    transform: translate(0, -5px);
  }
  svg {
    color: #c0c0c0;
  }
`;

export default PrevBtn;
