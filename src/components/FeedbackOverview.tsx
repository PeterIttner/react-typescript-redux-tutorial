import { RouteComponentProps, useNavigate } from "@reach/router";
import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import styled from "styled-components";
import { IAppState } from "../redux/types";
import { FeedbackItemType } from "../redux/types";
import FeedbackItem from "./FeedbackItem";

const Centered = styled.div`
  text-align: center;
`;

const FeedbackOverview: React.FC<RouteComponentProps> = () => {
  const navigate = useNavigate();
  const feedbacks = useSelector((state: IAppState) => state.feedbacks);

  return (
    <div>
      <h2>Overview</h2>

      <Row>
        <Col md={6}>
          <Button onClick={() => navigate("/add/pro")}>Add</Button>
          <Centered>Pro</Centered>
          {feedbacks
            .filter(
              (feedback) => feedback.feedbackType === FeedbackItemType.Pro
            )
            .map((feedback) => (
              <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
        </Col>
        <Col md={6}>
          <Button onClick={() => navigate("/add/con")}>Add</Button>
          <Centered>Con</Centered>
          {feedbacks
            .filter(
              (feedback) => feedback.feedbackType === FeedbackItemType.Con
            )
            .map((feedback) => (
              <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackOverview;
