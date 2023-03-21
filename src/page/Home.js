import React from "react";
import styled, { css, keyframes } from "styled-components";

const Home = () => {
  return (
    <Container>
      <Wrap>
        <Title>
          <CloudImg src="cloud.png" left={"left"} />
          MBTI 검사하기
          <CloudImg src="cloud.png" />
        </Title>
      </Wrap>
    </Container>
  );
};

const LeftCloud = keyframes`
  0%{
    opacity: 0;
    right: 100%;
  }
  100%{
    opacity: 1;
    right: 70%;
  }
`;
const RightCloud = keyframes`
  0%{
    opacity: 0;
    left: 100%;
  }
  100%{
    opacity: 0.77;
    left: 50%;
  }
`;

const Container = styled.div``;
const Wrap = styled.div`
  padding-top: 15vh;
`;
const Title = styled.h1`
  position: relative;
  color: #EFEFEF;
  font-size: 3.5rem;
`;
const CloudImg = styled.img`
  position: absolute;
  ${(props) =>
    props.left === "left"
      ? css`
          top: 0;
          right: 100%;
          width: 250px;
          transition: all 2s;
          animation: ${LeftCloud} 1.5s linear forwards;
        `
      : css`
          z-index: -4;
          top: -70px;
          left: 100%;
          width: 450px;
          transform: rotateY(180deg);
          animation: ${RightCloud} 2s forwards ease;
        `}
`;

export default Home;
