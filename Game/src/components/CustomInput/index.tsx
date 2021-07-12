import React from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";

const StyledInput = styled(Input)`
  background: transparent;
  color: #fff;
  border-radius: 7px;
  height: 45px;
  box-shadow: 0 0 40px 40px #916630 inset, 0 0 0 0 #916630;
  font-size: 16px;
  border: none;
  padding: 25px;

  ::placeholder {
    color: #d5c0a5;
    font-weight: bold;
  }
  :focus {
    outline: none;
  }
`;

const index = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default index;
