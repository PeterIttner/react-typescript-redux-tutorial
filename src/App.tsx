import React from "react";
import "./App.css";
import FeedbackOverview from "./components/FeedbackOverview";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import FeedbackItemEditor from "./components/FeedbackItemEditor";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/reducer";
function App() {
  return (
    <Provider store={reduxStore}>
      <Container>
        <h1>Openspace Demo</h1>
        <Router>
          <FeedbackOverview path="/" />
          <FeedbackItemEditor path="/add/:type" />
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
