import React, {Component} from 'react';
import {connect} from 'react-redux';

class OneImage extends Component {

    state = {
        tag_id: 0,
        image_id: 0
    }

    handleTagChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tag_id: event.target.value,
            image_id: this.props.image.id
        })
    }

    handleClick = (event) => {
        console.log(this.state);
        this.setState({
            tag_id: event.target.value,
            image_id: this.props.image.id
        })
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state });
        this.props.dispatch({ type: 'ADD_IMGTAG', payload: this.state })
    }


    render() {
        return(
                <div>
                    <img src = {this.props.image.path} />
                    <select value={this.state.tag_id} onChange={this.handleTagChange}>
                        <option disabled value="0">Pick One!</option>
                        {this.props.reduxState.tags.map((tag, i) => {
                            return (
                                <option value={tag.id}>{tag.name}</option>
                            )
                        })}
                    </select>
                    <button onClick={this.handleClick}>Apply Tag</button>
                    {/* <div>
                        {this.props.reduxState.tags.map((tag, i) => {
                            if(tag.id == this.state.tag_id) {
                                return <p>{tag.name}</p>
                            }
                        })}
                    </div> */}
                </div>
            )

    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(OneImage);