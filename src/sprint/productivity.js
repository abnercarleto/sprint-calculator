import React from 'react';
import { Row, Col } from 'react-grid-system';
import TextField from 'material-ui/TextField';

const Productivity = (props) => (
  <Row>
    <Col sm={5}>
      <TextField
        floatingLabelText='Number of days'
        onChange={(_, newVal) => props.productivity.numberOfDays = newVal}
      />
    </Col>
    <Col sm={5}>
      <TextField
        floatingLabelText='Productivity (%)'
        onChange={(_, newVal) => props.productivity.percent = newVal}
      />
    </Col>
  </Row>
);

export default Productivity;

