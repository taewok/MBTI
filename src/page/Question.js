import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import PrevBtn from "../components/Result/PrevBtn";

const Question = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [num, setNum] = useState(1);
  //질문 하나하나에 mbti 성향을 기록
  const [mbtiList, setMbtiList] = useState([]);

  useEffect(() => {
    const pageNum = location.pathname.split("/");
    navigate(`/question/${pageNum[pageNum.length - 1]}`);
    setNum(Number(pageNum[pageNum.length - 1]));
  }, [location.pathname, navigate, num]);

  const questionList = [
    {
      question: "데이트가 없는 주말에 나는",
      Q1: "침대랑 하루 종일 물아일체가 된다",
      Q2: "단톡에 연락해서 친구들과 약속을 잡는다",
      Q1Value: "I",
      Q2Value: "E",
    },
    {
      question: "친구의 소개로 소개팅에 나온 나는",
      Q1: "먼저 말 걸면서 분위기를 띄운다",
      Q2: "말을 걸어올 때까지 기다리고 본다",
      Q1Value: "E",
      Q2Value: "I",
    },
    {
      question: "데이트 중 길에서 연인의 친구를 만난다면 나는",
      Q1: "자연스럽게 웃으며 대한다 ",
      Q2: "무생물이 되어 조용히 있는다",
      Q1Value: "E",
      Q2Value: "I",
    },
    {
      question: "데이트 중 맛있어 보이는 밥집을 발견한 나는",
      Q1: "간판에서 맛집의 기운이 느껴진다 맛집 각이야",
      Q2: "유명하고 리뷰도 많으니까 맛은 보장되어 있겠군",
      Q1Value: "N",
      Q2Value: "S",
    },
    {
      question: "오늘 본 영화를 궁금해하는 연인에게 나는",
      Q1: "주인공이 좀비 바이러스가 퍼져서 치료하기 위한 영화야",
      Q2: "좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어",
      Q1Value: "S",
      Q2Value: "N",
    },
    {
      question: "연인에게 줄 선물을 고르게 된 나는",
      Q1: "실용성은 없어도 예쁘고 기억에 남을 선물",
      Q2: "연인에게 요즘 가장 필요할 것 같은 선물",
      Q1Value: "N",
      Q2Value: "S",
    },
    {
      question: "연인과 사소한 일로 다퉜을 때 나는",
      Q1: "나!! 진짜!! 너무!!! 화났어!!!!!",
      Q2: "~점은 꼭 고쳐줬으면 좋겠어 이렇게 하면 되잖아",
      Q1Value: "F",
      Q2Value: "T",
    },
    {
      question: "축 처진 연인이 우울하다고 말했을 때 나는",
      Q1: "왜 우울해? 뭐 때문에 우울한 거야?",
      Q2: "5초 만에 감정이입 완료. 같이 글썽거린다",
      Q1Value: "T",
      Q2Value: "F",
    },
    {
      question: "힘들게 이벤트를 준비한 나를 신나게 할 연인의 칭찬은?",
      Q1: "사랑해 최고야 나 완전 감동했어",
      Q2: "고마워 요즘 바쁠 텐데 언제 이런 걸 생각했어?",
      Q1Value: "F",
      Q2Value: "T",
    },
    {
      question: "데이트 룩을 고를 때 나는",
      Q1: "전날부터 머리부터 발끝까지 세팅해 준다",
      Q2: "나가기 직전 마음에 드는 옷을 입는다",
      Q1Value: "J",
      Q2Value: "P",
    },
    {
      question: "썸 중에 연인이 집에 놀러 온다고 했을 때 나는",
      Q1: "보이는 곳만 일단 급하게 치워둔다",
      Q2: "쓰레기 버리기부터 화장실 청소까지 한다",
      Q1Value: "P",
      Q2Value: "J",
    },
    {
      question: "커플 해외여행 계획을 짜게 된 나는",
      Q1: "할 거면 제대로! 일별로 세부 일정을 정리한다",
      Q2: "비행기 표만 끊어두고 계획의 80% 끝난다고 생각한다",
      Q1Value: "J",
      Q2Value: "P",
    },
  ];

  const OptionOnClick = (value) => {
    mbtiList.push(value);
    setNum(num + 1);

    //마지막 질문 클릭시 결과 페이지로 이동
    if (num === 12)
      navigate(`/question/result`, { state: { mbtiList: mbtiList } });
    else navigate(`/question/${num + 1}`);
  };

  return (
    <Container>
      <ProgressNum>{num}/12</ProgressNum>
      <Progress progress={num}></Progress>
      <ImgBox>
        <ReferenceImg src={`/images/참고${num}.jpg`} />
        <PrevBtn
          pageNum={num}
          mbtiList={mbtiList}
          setMbtiList={setMbtiList}
        />
      </ImgBox>
      <Section>
        <QuestionNum>Q,{num}</QuestionNum>
        <QuestionText>{questionList[num - 1].question}?</QuestionText>
        <Option onClick={() => OptionOnClick(questionList[num - 1].Q1Value)}>
          <span>{questionList[num - 1].Q1}</span>
        </Option>
        <Option onClick={() => OptionOnClick(questionList[num - 1].Q2Value)}>
          <span>{questionList[num - 1].Q2}</span>
        </Option>
      </Section>
    </Container>
  );
};

const OptionAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(80%);
  }
  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Container = styled.div`
  width: 560px;
  @media (max-width: 660px) {
    width: 90vw;
  }
`;
const Section = styled.section`
  padding-top: 5vh;
`;
const ProgressNum = styled.h5`
  text-align: right;
  padding-top: 5vh;
`;
const Progress = styled.div`
  position: relative;
  height: 20px;
  background-color: #dadada;
  border-radius: 15px;
  &::after {
    content: "";
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: calc(100% / 12 * ${(props) => props.progress});
    height: 100%;
    background-color: #00ae2c;
    border-radius: 15px;
  }
`;

const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 5vh;
`;
const ReferenceImg = styled.img`
  width: 300px;
`;

const QuestionNum = styled.h1`
  padding-bottom: 5vh;
  text-align: center;
  font-size: 2rem;
`;
const QuestionText = styled.div`
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 1.5rem;
  @media (max-width: 660px) {
    font-size: 1.2rem;
  }
`;
const Option = styled.div`
  margin-top: 5vh;
  padding: 25px 0px;
  width: 100%;
  background-color: #fb5799;
  border-radius: 15px;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  animation: ${OptionAnimation} 1s forwards;
  cursor: pointer;
  &:hover {
    background-color: #ed0562;
  }
  @media (max-width: 660px) {
    padding: 20px 15px;
    width: calc(100% - 30px);
    font-size: 1rem;
  }
`;

export default Question;
