import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Heading from "../components/Heading";
import Board from "../scenes/Board";
import Home from "../scenes/Home";
import HighScores from "./../scenes/HighScores";
const Routing: React.FC = () => {
  return (
    <>
      <Router>
        <Heading title="Memory - King" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/highscores" component={HighScores} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
