require('./post-list-container.scss');

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, selectPost, deslectPost} from '../actions/post'
import Posts from '../components/posts'

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loadPosts, closeAllComments} = this.props;
        document.body.addEventListener('click', closeAllComments);
        loadPosts();
    }

    componentWillUnmount(){
        const {closeAllComments} = this.props;
        document.body.removeEventListener('click', closeAllComments);
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

const isInPostRecursive = (node, className) => {
    if (node.className.indexOf(className) > -1) return true;
    if (node.nodeName !== 'BODY') {
        return isInPostRecursive(node.parentNode, className);
    }

    return false;
};

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
        },
        closeAllComments: (e) => {
            if (isInPostRecursive(e.target, 'post')) return;
            dispatch(deslectPost());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);