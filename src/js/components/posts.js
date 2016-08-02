require('./posts.scss');
import React from 'react'
import Post from '../components/post'


const Posts = ({posts, selectedPostId, onPostSelect, comments, isCommentLoading}) => (
    <ul className="post-list">
        {
            posts.map(post => <Post key={post.id}
                                    post={post}
                                    onPostSelect={() => {onPostSelect(post.id)}}
                                    comments={comments[post.id]}
                                    isCommentLoading={isCommentLoading}
                                    isSelected={selectedPostId === post.id}/>)
        }
    </ul>
);

export default Posts;