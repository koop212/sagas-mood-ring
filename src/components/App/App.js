import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import AddTag from '../AddTag/AddTag';
import ImageDisplay from '../ImageDisplay/ImageDisplay';



class App extends Component {



  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES' });
    this.props.dispatch({ type: 'FETCH_TAGS' });
    this.props.dispatch({ type: 'FETCH_IMG_TAG' });
    this.props.dispatch({ type: 'ADD_IMGTAG' });

  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>Image Carousel</h1>
        </header>
        <ImageDisplay />
        {/* <AddTag /> */}
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
