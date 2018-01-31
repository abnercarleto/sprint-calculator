import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import Member from './member';
import Productivity from './productivity';
import _ from 'lodash';

class MemberObj {
  constructor() {
    this._id = _.uniqueId();
  }

  get id() { return this._id }
  get name() { return this._name }
  set name(name){ this._name = name }
  get points() { return this._points }
  set points(points) { this._points = points }
}

class SprintComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productivity: {
        numberOfDays: null,
        percent: null
      },
      members: []
    }
  }

  renderMember(member, index) {
    return(
      <Member
        key={member.id}
        onRemoveClick={() => this.rmMember(index)}
        member={member}
      />
    );
  }

  renderMembers() {
    return this.state.members.map((x, index) => this.renderMember(x, index));
  }

  addMember() {
    console.log('member added');
    this.state.members.push(new MemberObj());
    this.setState(this.state);
  }

  rmMember(index) {
    console.log('member removed');
    this.state.members.splice(index, 1);
      console.log(this.state.members)
    this.setState(this.state);
  }

  calculate() {
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <Productivity
          productivity={this.state.productivity}
        />

        {this.renderMembers()}

        <Row>
          <Col sm={3}>
            <RaisedButton
              label='Add member'
              onClick={() => this.addMember()}
            />
          </Col>
          <Col sm={3} >
            <RaisedButton
              label='Calculate'
              primary={true}
              onClick={() => this.calculate()}
            />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default SprintComponent;

