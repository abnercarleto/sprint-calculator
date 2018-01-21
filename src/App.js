import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <Container>
          <Row>
            <Col sm={5}>
              test
            </Col>
            <Col sm={5}>
              Test 2
            </Col>
            <Col>
              Test 3
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
