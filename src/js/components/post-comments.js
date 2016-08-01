require('./post-comments.scss');
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadCommentsIfNeeded} from '../actions/post'

class PostComments extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(loadCommentsIfNeeded());
    }

    render() {
        const {comments} = this.props;
        return <div className="comments">
            <div className="comment-heading">Comments</div>
            {
                comments && comments.length > 0 && comments.map(comment =>
                    <div key={comment.id} className="comment">
                        <div className="author">{comment.name}:</div>
                        <div className="comment-content">{comment.body}</div>
                    </div>)
            }
        </div>
    }
}


export default connect()(PostComments);