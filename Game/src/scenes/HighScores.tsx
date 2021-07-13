import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/ducks/user";
import { Descriptions, Table } from "antd";
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
  width: 30%;
  margin: auto;
`;

const StyledButton = styled(CustomButton)`
  width: 100%;
  margin: 20px 0 0 0;
`;

const columns = [
  {
    title: "Rank",
    key: "data",
    render: (text: any, record: any, index: any) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Flips",
    dataIndex: "flips",
    key: "flips",
  },
  {
    title: "Duration",
    dataIndex: "timer",
    key: "timer",
    render: (item: any) => conSecMin(item),
  },
];
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
        <StyledButton>Start The Game</StyledButton>
      </Link>
      <StyledList>
        <Table dataSource={userSort} columns={columns} />;
      </StyledList>
    </Wrapper>
  );
};

export default HighScores;
