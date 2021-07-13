import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import conSecMin from "../components/conSecMin";
import { getCards } from "../redux/ducks/cards";
import Card from "./Card";
import UserDetailModal from "./UserDetailModal";

const StyledResult = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
`;

const StyledInfo = styled.div`
  color: #ffbb89;
  font-size: 1.5em;
`;

const StyledLoading = styled.h1`
  font-size: 100px;
  text-align: center;
  color: #fff;
`;
const Board = () => {
  const dispatch = useDispatch();
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(1);
  const [visible, setVisible] = useState(false);
  const [stopTime, setStopTime] = useState(timer);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const totalCards = useSelector(({ cards }: any) => cards);

  useEffect(() => {
    let gameTime = setInterval(() => {
      if (timer > 0) {
        setTimer((prev: number) => prev + 1);
        setStopTime(timer);
      }
    }, 1000);

    return () => clearInterval(gameTime);
  }, [timer]);

  return (
    <>
      <StyledResult>
        <StyledInfo className="info">
          Time <span>{conSecMin(timer)}</span>
        </StyledInfo>
        <StyledInfo className="info">
          Flips <span>{flips}</span>
        </StyledInfo>
      </StyledResult>

      {totalCards.loading ? (
        <StyledLoading>loading</StyledLoading>
      ) : (
        <>
          <UserDetailModal visible={visible} flips={flips} timer={stopTime} />
          <Card
            totalCards={totalCards.cards}
            setFlips={setFlips}
            setTimer={setTimer}
            setVisible={setVisible}
          />
        </>
      )}
    </>
  );
};

export default Board;
