import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  // Renders the entire app on the DOM
componentDidMount() {
  this.props.dispatch({type:'FETCH_IMAGES'})
}

  render() {
    return (
      <div className="App">
        {this.props.reduxState.images.map((pic, i) => {
          return <div key={i}><img src={pic.path} alt={pic.title} /></div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
