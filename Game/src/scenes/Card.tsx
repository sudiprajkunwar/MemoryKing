import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Cobweb from "../Assets/Images/Cobweb.png";
import CobwebGrey from "../Assets/Images/CobwebGrey.png";
import Spider from "../Assets/Images/Spider.png";
import Image from "../components/Image";
import { Cards } from "../models/interface";
import { useMemo } from "react";

const StyledFrontFace = styled.div`
  background-color: #ffbb89;
  border-color: #333;
  transform: rotateY(180deg);
`;
const StyledBackFace = styled.div`
  background-color: black;
  border-color: #ff6d00;
  transform: rotateY(0);

  :hover .spider {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  height: 145px;
  width: 120px;
  .card-face {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    transition: transform 500ms ease-in-out;
    backface-visibility: hidden;
  }
  .card-value {
    transform: translateY(53px);
  }
`;

const StyledWebPng = styled(Image)`
  position: absolute;
  transition: width 100ms ease-in-out, height 100ms ease-in-out;
  width: 45px;
  height: 45px;
`;
const StyledSpiderPng = styled(Image)`
  align-self: flex-start;
  transition: transform 100ms ease-in-out;
  transform: translateY(-10px);
  height: 100px;
`;
const Wrapper = styled.section`
  margin: 50px auto;
  display: grid;
  padding-bottom: 45px;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  justify-content: center;
`;
type CardProps = {
  totalCards: Array<Cards>;
  setFlips: any;
  setTimer: any;
  setVisible: any;
};

const Card: React.FC<CardProps> = ({
  totalCards,
  setFlips,
  setTimer,
  setVisible,
}) => {
  const [openCard, setOpencard] = useState<any>([]);
  const [matched, setMatched] = useState<any>([]);
  const [data, setData] = useState<Array<Cards>>([]);

  const pairOfCards = useMemo(
    () => [...totalCards, ...totalCards],
    [totalCards]
  );

  useEffect(() => {
    setData(pairOfCards.sort(() => Math.random() - 0.5));
  }, [pairOfCards]);

  useEffect(() => {
    let distinctMatch: any = [...new Set(matched)];
    if (distinctMatch.length === pairOfCards.length / 2) {
      setTimeout(() => {
        setVisible(true);
        setTimer(0);
      }, 1500);
    }
    console.log(distinctMatch, "distinctMatch");
  }, [matched, pairOfCards]); // eslint-disable-line

  useEffect(() => {
    const firstCard = data[openCard[0]];
    const secondCard = data[openCard[1]];
    secondCard &&
      firstCard.id === secondCard.id &&
      setMatched([...matched, firstCard.id]);

    openCard.length === 2 && setTimeout(() => setOpencard([]), 800);
  }, [openCard]); // eslint-disable-line

  const handleCardClick = (idx: number) => {
    if (idx !== openCard[0]) {
      setFlips((prev: any) => prev + 1);
      setOpencard((prev: any) => [...prev, idx]);
    }
  };

  return (
    <>
      <Wrapper>
        {data.map((item: any, idx: any) => {
          let isFlip = false;
          if (openCard.includes(idx)) isFlip = true;
          if (matched.includes(item.id)) {
            isFlip = true;
          }
          return (
            <Container
              className="visible"
              key={idx}
              onClick={() => handleCardClick(idx)}
            >
              <StyledBackFace
                className="card-face"
                style={{
                  transform: isFlip ? "rotateY(-180deg)" : "rotateY(0)",
                }}
              >
                <StyledWebPng
                  src={Cobweb}
                  top={0}
                  left={0}
                  transform="rotate(270deg)"
                />
                <StyledWebPng src={Cobweb} top={0} right={0} />
                <StyledWebPng
                  src={Cobweb}
                  bottom={0}
                  left={0}
                  transform="rotate(180deg)"
                />
                <StyledWebPng
                  src={Cobweb}
                  right={0}
                  bottom={0}
                  transform="rotate(90deg)"
                />
                <StyledSpiderPng className="spider" src={Spider} />
              </StyledBackFace>
              <StyledFrontFace
                className="card-face"
                style={{
                  transform: !isFlip ? "rotateY(-180deg)" : "rotateY(0)",
                }}
              >
                <StyledWebPng
                  src={CobwebGrey}
                  top={0}
                  left={0}
                  transform="rotate(270deg)"
                />
                <StyledWebPng src={CobwebGrey} top={0} right={0} />
                <StyledWebPng
                  src={CobwebGrey}
                  left={0}
                  bottom={0}
                  transform="rotate(180deg)"
                />
                <StyledWebPng
                  src={CobwebGrey}
                  right={0}
                  bottom={0}
                  transform="rotate(90deg)"
                />
                <h1>{item.title}</h1>
              </StyledFrontFace>
            </Container>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Card;
