import React from "react";
import styled from "@emotion/styled";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

const Wrapper = styled.section``;
const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Link to="/highscores">
          <CustomButton>View Highscores</CustomButton>
        </Link>
        <Link to="/board">
          <CustomButton>Start The Game</CustomButton>
        </Link>
      </Wrapper>
    </div>
  );
};

export default App;
