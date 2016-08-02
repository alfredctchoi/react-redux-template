require('./post-list-container.scss');

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../actions/post'
import Posts from '../components/posts'
import {selectPost} from '../actions/post'

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
        document.body.addEventListener('click', ()=>{
            console.log('body');
        })
    }

    render() {
        const {isLoading, posts, selectedPostId, onPostSelect, comments, isCommentLoading} = this.props;
        return <div className="post-list-container">
            {
                isLoading &&
                <div>
                    Loading...
                </div>
            }

            {
                !isLoading && posts.length > 0 &&
                <Posts posts={posts}
                       selectedPostId={selectedPostId}
                       comments={comments}
                       isCommentLoading={isCommentLoading}
                       onPostSelect={onPostSelect}/>
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    const {posts, isLoading, selectedPostId, comments, isCommentLoading} = state.postList;
    return {
        posts,
        isLoading,
        selectedPostId,
        comments,
        isCommentLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostSelect: (id) => {
            dispatch(selectPost(id))
        },
        loadPosts: () => {
            dispatch(getPosts())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);