import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ResultBtn = () => {
  const navigate = useNavigate();

  const AgainBtnOnClick = () => {
    navigate("/question/1");
  };

  return (
    <Container>
      <AgainBtn onClick={() => AgainBtnOnClick()}>다시하기</AgainBtn>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
`;
const AgainBtn = styled.button`
  width: 170px;
  height: 40px;
  border: 2px solid #aaaaaa;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

export default ResultBtn;
