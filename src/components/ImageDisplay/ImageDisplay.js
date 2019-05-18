import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneImage from '../OneImage/OneImage';
class ImageDisplay extends Component {

    state = {
        index: 0
    }


    // A function to click on Next button to show next image.
    handleNext = (event) => {
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
                {this.props.reduxState.images.map((pic, i) => {
                    if(pic.id-1 === index) {
                        return <OneImage key={i} image={pic} />
                    }
                })}
                <button onClick={this.handlePrev}>Previous</button><button onClick={this.handleNext}>Next</button>
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


