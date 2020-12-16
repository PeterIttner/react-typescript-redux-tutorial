import { RouteComponentProps, useNavigate } from "@reach/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Input, Row } from "reactstrap";
import { addConFeedback, addProFeedback } from "../redux/reducer";

interface IFeedbackItemEditorProps extends RouteComponentProps {
  type?: string;
}

const FeedbackItemEditor: React.FC<IFeedbackItemEditorProps> = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const saveAction = type === "pro" ? addProFeedback : addConFeedback;

  return (
    <div>
      <h2>Add {type} Feedback</h2>

      <Row>
        <Col>
          <Input
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        </Col>
        <Col>
          <Button
            onClick={() => {
              dispatch(saveAction(text));
              setText("");
            }}
          >
            Save
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => navigate("/")}>Back</Button>
        </Col>
      </Row>
    </div>
  );
};
export default FeedbackItemEditor;
