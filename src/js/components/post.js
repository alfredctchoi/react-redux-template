require('./post.scss');
import React from 'react'
import PostComments from '../components/post-comments'

const Post = ({post, onPostSelect, isSelected, comments}) => {
    return <li className={`post${isSelected ? ' selected' : ''}`}
               onClick={onPostSelect}>
        <div className="post-container">
            <div className="heading">{post.title}</div>
            <div className="body">{post.body}</div>
        </div>
        {
            isSelected && <hr className="divider"/>
        }
        <div className="post-container">
            {
                isSelected &&
                <PostComments comments={comments}/>
            }
        </div>
    </li>
};

export default Post;