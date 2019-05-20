import React, {Component} from 'react';
import {connect} from 'react-redux';

class TagList extends Component {

    render() {
        return(
            <div>
                {/* Show list of tags matching with the image */}
                <p>{this.props.tags.name}</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(mapStateToProps)(TagList);