import React from 'react'
import './Post.css';
import {Avatar} from '@material-ui/core'

function Post({username,caption,imageurl}) {
    return (
        <div class="post">
            <div className="post__header">
            <Avatar className="post__avatar"
            alt="Riya"
            src="/static/images/avatar/1.png"/>
            <h3>{username}</h3>
            </div>

            
            
            <img className="post__image" src={imageurl}/>
            <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Post
