import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SprintComponent from './sprint/sprint-component.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <SprintComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
