import React from 'react';
import { Row, Col } from 'react-grid-system';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Member = (props) => (
  <Row>
    <Col sm={5}>
      <TextField
        floatingLabelText='Developer name'
        onChange={(_, newVal) => {props.member.name = newVal}}
      />
    </Col>
    <Col sm={5}>
      <TextField
        floatingLabelText='Points per day'
        onChange={(_, newVal) => {props.member.points = newVal}}
      />
    </Col>
    <Col sm={2}>
      <RaisedButton
        label="Remove"
        onClick={props.onRemoveClick}
      />
    </Col>
  </Row>
);

export default Member;

