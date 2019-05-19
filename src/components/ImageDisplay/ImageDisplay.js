import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneImage from '../OneImage/OneImage-Test.js';
class ImageDisplay extends Component {

    state = {
        index: 0
    }


    // A function to click on Next button to show next image.
    handleNext = (event) => {
        event.preventDefault();
        console.log('In handleNext');
        if(this.state.index === this.props.reduxState.images.length - 1) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    // A function to show the previous image.
    handlePrev = (event) => {
        event.preventDefault();
        console.log('In handlePrev');
        if(this.state.index === 0) {
            this.setState({
                index: this.props.reduxState.images.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }      
    }


    render() {
        let index = this.state.index;
        return(
            <div>
                <button onClick={this.handlePrev}>&#10094;</button>
                <button onClick={this.handleNext}>&#10095;</button>
                {this.props.reduxState.images.map((pic, i) => {
                    if (pic.id - 1 === index) {
                        return <OneImage key={i} image={pic} />
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(mapStateToProps)(ImageDisplay);


