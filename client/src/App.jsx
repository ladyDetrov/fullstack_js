import React, { Component } from 'react';
import { connect } from 'react-redux'

import DismissibleAlert from './components/DismissibleAlert/DismissibleAlert.jsx';
import Event from './components/Event/Event.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  render() {
    return (
      <div className="App container">
          <DismissibleAlert />
          <Event />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps)(App);

