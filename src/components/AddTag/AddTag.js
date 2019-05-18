// import React, {Component} from 'react';
// import {connect} from 'react-redux';




// class AddTag extends Component {

//     state = {
//         tag_id: 0,
//         // tag_name: ''
//     }

//     handleTagChange = (event) => {
//         console.log(event.target.value);
//         this.setState({
//             tag_id: event.target.value,
//         })
//     }

//     // handleTagNameChange = (event) => {
//     //     console.log(event.target.value);
//     //     this.setState({
//     //         tag_name: event.target.value
//     //     })
//     // }

//     handleClick = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.dispatch({ type: 'ADD_TAG', payload: this.state });
//         this.props.dispatch({type: 'ADD_IMGTAG', payload: this.state.tag_name})
//     }

//     render() {
//         return(
//             <div>
//                 <select value={this.state.tag_id} onChange={this.handleTagChange}>
//                     <option disabled value="0">Pick One!</option>
//                     {this.props.reduxState.tags.map((tag, i) => {
//                         return (
//                             <option value={tag.id}>{tag.name}</option>
//                         )
//                     })}
//                 </select>
//                 <button onClick={this.handleClick}>Apply Tag</button>
//                 {/* <div>
//                     {this.props.reduxState.tags.map((tag, i) => {
//                         if(tag.id == this.state.tag_id) {
//                             return <p>{tag.name}</p>
//                         }
//                     })}
//                 </div> */}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (reduxState) => {
//     return {
//         reduxState
//     }
// }

// export default connect(mapStateToProps)(AddTag);