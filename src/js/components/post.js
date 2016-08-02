require('./post.scss');
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PostComments from '../components/post-comments'

class Post extends Component {

    componentDidUpdate(prevProps) {
        const {isSelected} = this.props;
        if (!prevProps.isSelected && isSelected) {
            let component = ReactDOM.findDOMNode(this);
            document.body.scrollTop = component.offsetTop - 65;
        }
    }

    render() {
        const {post, onPostSelect, isSelected, comments, isCommentLoading} = this.props;
        return <li id={`post_${post.id}`}
                   className={`post${isSelected ? ' selected' : ''}`}
                   onClick={onPostSelect}>
            <div className="post-container content">
                <div className="heading">{post.title}</div>
                <div className="body">{post.body}</div>
            </div>
            {
                isSelected && <hr className="divider"/>
            }
            {
                isSelected &&
                <div className="post-container">
                    <PostComments comments={comments} isLoading={isCommentLoading}/>
                </div>
            }

        </li>

    }
}

export default Post;