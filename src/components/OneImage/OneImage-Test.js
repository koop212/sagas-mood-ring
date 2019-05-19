// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import TagList from '../TagList/TagList';
// import './OneImage.css';
// import { MenuItem, Popper, Button, ClickAwayListener, Grow, Paper, MenuList } from '@material-ui/core';



// class OneImage extends Component {

//     state = {
//         tag_id: 0,
//         image_id: 0,
//         open: false,
//     }

//     handleToggle = () => {
//         this.setState(state => ({ open: !state.open }));
//     };

//     handleClose = event => {
//         if (this.anchorEl.contains(event.target)) {
//             return;
//         }

//         this.setState({ open: false });
//     };

//     componentDidMount() {
//         this.setState({
//             image_id: this.props.image.id
//         })
//     }


//     handleTagChange = (event) => {
//         event.preventDefault();
//         console.log(event.target.value);
//         this.setState({
//             tag_id: event.target.value,
//             // image_id: this.props.image.id
//         })
//     }


//     // 
//     handleClick = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.setState({
//             tag_id: event.target.value,
//             image_id: this.props.image.id
//         })
//         // this.props.dispatch({ type: 'ADD_TAG', payload: this.state });
//         this.props.dispatch({ type: 'ADD_IMGTAG', payload: this.state });
//     }


//     render() {
//         const { open } = this.state;

//         return (
//             <div>
//                 {/* <div>
//                     <img className="image" src={this.props.image.path} alt={this.props.image.title} />
//                 </div>
//                 <div>
//                     <select value={this.state.tag_id} onChange={this.handleTagChange}>
//                         <option disabled value="0">Pick One!</option>
//                         {this.props.reduxState.tags.map((tag, i) => {
//                             return (
//                                 // <TagList tags={tag} />
//                                 <option key={i} value={tag.id}>{tag.name}</option>
//                             )
//                         })}
//                     </select>
//                     <button onClick={this.handleClick}>Apply Tag</button>
//                 </div>
//                 <div>
//                     {this.props.reduxState.imgTags.map((tag, i) => {
//                         if (tag.image_id === this.state.image_id) {
//                             console.log('in image tag map', tag.name);
//                             return <TagList key={i} tags={tag} />
//                         }
//                         return tag;
//                     })}
//                 </div> */}
//                 <div>
//                     <img className="image" src={this.props.image.path} alt={this.props.image.title} />
//                     <Button
//                         buttonRef={node => {
//                             this.anchorEl = node;
//                         }}
//                         aria-owns={open ? 'menu-list-grow' : undefined}
//                         aria-haspopup="true"
//                         onClick={this.handleToggle}
//                     >
//                         Toggle Menu Grow
//                     </Button>
//                     <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
//                         {({ TransitionProps, placement }) => (
//                             <Grow
//                                 {...TransitionProps}
//                                 id="menu-list-grow"
//                                 style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                             >
//                                 <Paper>
//                                     <ClickAwayListener onClickAway={this.handleClose}>
//                                         <MenuList value={this.state.tag_id} onChange={this.handleTagChange}>
//                                             {this.props.reduxState.tags.map((tag, i) => {
//                                                 return (
//                                                     // <TagList tags={tag} />
//                                                     <MenuItem onClick={this.handleClose} key={i} value={tag.id}>{tag.name}</MenuItem>
//                                                 )
//                                             })}
//                                         </MenuList>
//                                         <button onClick={this.handleClick}>Apply Tag</button>
//                                     </ClickAwayListener>
//                                     <div>
//                                         {this.props.reduxState.imgTags.map((tag, i) => {
//                                             if (tag.image_id === this.state.image_id) {
//                                                 console.log('in image tag map', tag.name);
//                                                 return <TagList key={i} tags={tag} />
//                                             }
//                                             return tag;
//                                         })}
//                                     </div>
//                                 </Paper>
//                             </Grow>
//                         )}
//                     </Popper>
//                 </div>
//             </div>
//         )

//     }
// }

// const mapStateToProps = (reduxState) => {
//     return {
//         reduxState
//     }
// }

// export default connect(mapStateToProps)(OneImage);