import React, {Component} from 'react';
import {connect} from 'react-redux';




class AddTag extends Component {

    state = {
        image_id: 0,
        tag_id: 0
    }

    handleTagChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tag_id: event.target.value
        })
    }


    render() {
        return(
            <select value={this.state.tag_id} onChange={this.handleTagChange}>
                <option disabled value="0">Pick One!</option>
                {this.props.reduxState.tags.map((tag, i) => {
                    return (
                        <option value={tag.id}>{tag.name}</option>
                    )
                })}
            </select>
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(AddTag);