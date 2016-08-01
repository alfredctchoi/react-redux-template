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
    }

    render() {
        const {isLoading, posts, selectedPostId, onPostSelect, comments} = this.props;
        return <div>
            {
                isLoading &&
                <div>
                    Loading...
                </div>
            }

            {
                !isLoading && posts.length > 0 &&
                <Posts classes="post-list-container"
                       posts={posts}
                       selectedPostId={selectedPostId}
                       comments={comments}
                       onPostSelect={onPostSelect}/>
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    const {posts, isLoading, selectedPostId, comments} = state.postList;
    return {
        posts,
        isLoading,
        selectedPostId,
        comments
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