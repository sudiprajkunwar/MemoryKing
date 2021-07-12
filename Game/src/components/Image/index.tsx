import React from "react";
import styled from "@emotion/styled";

type ImageProps = {
  right?: number;
  top?: number;
  left?: number;
  bottom?: number;
  transform?: string;
  src: string;
  className?: string;
};
const StyledImage = styled.img<ImageProps>`
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
`;
const Image = (props: ImageProps) => {
  return <StyledImage {...props} alt="icon" />;
};

export default Image;
