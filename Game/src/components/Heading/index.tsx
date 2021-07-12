import React from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
  fontSize?: string;
};

const StyledHeading = styled.h1<Props>`
  color: #ff6d00;
  font-family: Creepy, serif;
  font-weight: normal;
  text-align: center;
  font-size: ${(props) => props.fontSize || "3.5em"};
  margin-bottom: 8px;
  margin-top: 20px;
`;

const index = (props: Props) => {
  const { title } = props;
  return <StyledHeading {...props}>{title}</StyledHeading>;
};

export default index;
