import styled from "@emotion/styled";
import React from "react";

const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 17px 35px;
  text-transform: uppercase;
  font-weight: 700;

  :hover,
  :focus {
    color: #fff;
    outline: 0;
  }
  border-color: #916630;
  box-shadow: 0 0 40px 40px #916630 inset, 0 0 0 0 #916630;
  transition: all 200ms ease-in-out;

  :hover {
    box-shadow: 0 0 10px 0 #ecc390 inset, 0 0 10px 4px #916630;
  }
`;
type ButtonProps = {
  children: any;
  onClick?: () => void;
  htmlType?: string;
};
const index = (props: ButtonProps) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default index;
