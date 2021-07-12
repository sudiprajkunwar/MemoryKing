import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/ducks/user";
import { Descriptions } from "antd";
import { Users } from "../models/interface";
import conSecMin from "./../components/conSecMin";
import styled from "@emotion/styled";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

const StyledList = styled.div`
  padding-top: 75px;
  padding-bottom: 15px;
  text-align: center;
  .ant-descriptions {
    margin-bottom: 25px;
    .ant-descriptions-title {
      color: #d5c5c5;
    }
    .ant-descriptions-item-label {
      color: #cbc7c2;
    }
    .ant-descriptions-item-content {
      color: #cbc7c2;
    }
    .ant-descriptions-view {
      margin-left: 43px;
    }
  }
`;

const Wrapper = styled.div`
  width: 17%;
  margin: auto;
`;
const HighScores = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector(({ users }: any) => users.users);
  const userSort = user.sort((a: any, b: any) => a.flips - b.flips);
  return (
    <Wrapper>
      <Heading title="HighScore" fontSize="2em" />
      <Link to="/board">
        <CustomButton>Start The Game</CustomButton>
      </Link>
      <StyledList>
        {userSort.map((item: Users) => (
          <Descriptions title={item.name} key={item.id}>
            <Descriptions.Item label="flips">{item.flips}</Descriptions.Item>
            <Descriptions.Item label="Duration">
              {conSecMin(item.timer)}
            </Descriptions.Item>
          </Descriptions>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default HighScores;
