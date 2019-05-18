import React, {Component} from 'react';
import {connect} from 'react-redux';
 
class ImageDisplay extends Component {



    render() {
        
        return(
            <div>
                {this.props.reduxState.images.map((pic, i) => {
                    return <div className="card" key={i}><img className="image" src={pic.path} alt={pic.title} /></div>
                })}
                <button>Previous</button><button>Next</button>
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