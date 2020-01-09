import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagList from '../TagList/TagList';
import './OneImage.css';
// import { MenuItem, TextField, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';


class OneImage extends Component {

    state = {
        tag_id: 0,
        image_id: 0,
    }

    componentDidMount() {
        this.setState({
            image_id: this.props.image.id
        })
    }

    // change tag id value when selecting a tag
    handleTagChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
            tag_id: event.target.value,
        })
    }


    // To add tag id and image id to the database
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        if(this.state.tag_id == 0) {
            return alert('Please select how you feel about the image.')
        }
         this.setState({
            tag_id: event.target.value,
            // image_id: this.props.image.id
        })
        this.props.dispatch({ type: 'ADD_IMGTAG', payload: this.state });
    }


    render() {
        return (
                <div>
                    <div className="mainImage">
                        <img className="image" src={this.props.image.path} alt={this.props.image.title} />
                    </div>
                    <div>
                        <select className="dropDown" value={this.state.tag_id} onChange={this.handleTagChange}>
                            <option value="0">What do you feel?</option>
                                {this.props.reduxState.tags.map((tag, i) => {
                                    return (
                                        <option key={i} value={tag.id}>{tag.name}</option>
                                    )
                                })}
                        </select>
                        <button className="applyBtn" onClick={this.handleClick}>Apply Tag</button>   
                    </div>
                    <div>
                        {this.props.reduxState.imgTags.map((tag, i) => {
                            if(tag.image_id === this.state.image_id) {
                                console.log('in image tag map', tag.name);
                                return <TagList key={i} tags={tag}/>
                            }
                            return null;
                        })}
                    </div>
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