import React from "react";
import { Link } from "react-router-dom";
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
        <MoveBtn>
          <Link to={"/question/1"}>검사하기</Link>
        </MoveBtn>
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
const LineAnimation1 = keyframes`
  0%{
    top: 0;
    opacity: 0;
  }
  100%{
    top: 13vh;
    opacity: 0.8;
  }
`;
const LineAnimation2 = keyframes`
  0%{
    left: 0;
    opacity: 0;
  }
  100%{
    left: 15vw;
    opacity: 0.8;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f19100;
`;
const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #202020;
    animation: ${LineAnimation1} 1s ease-in forwards;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 3px;
    height: 100vh;
    background-color: #202020;
    animation: ${LineAnimation2} 1s ease-in forwards;
  }
`;
const Title = styled.h1`
  position: relative;
  color: #efefef;
  font-family: "SDSamliphopangche_Outline";
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
          top: -70px;
          left: 100%;
          width: 450px;
          transform: rotateY(180deg);
          animation: ${RightCloud} 2s forwards ease;
        `}
`;

const MoveBtn = styled.button`
  margin-top: 200px;
  padding: 10px 25px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: #000000;
  font-size: 1rem;
  font-family: "GmarketSansMedium";
  cursor: pointer;
  &:hover {
    border: 3px dashed white;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`;

export default Home;
