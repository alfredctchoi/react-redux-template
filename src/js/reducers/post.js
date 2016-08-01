import {ENUMS as POST_ENUMS} from '../actions/post'

const INITIAL_STATE = {
    posts: [],
    comments: {},
    isLoading: false,
    selectedPostId: null
};

const posts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_ENUMS.SELECT_POST:
            return Object.assign({}, state, {
                selectedPostId: action.postId
            });
        case POST_ENUMS.LOADING_POSTS:
            return Object.assign({}, state, {
                isLoading: true
            });
        case POST_ENUMS.LOADED_POSTS:
            return Object.assign({}, state, {
                isLoading: false,
                posts: action.posts
            });
        case POST_ENUMS.LOADED_POST_COMMENTS:
            const existingComments = Object.assign({}, state.comments);
            existingComments[action.postId] = action.comments;
            return Object.assign({}, state, {
               comments: existingComments 
            });
        default:
            return state;
    }
};

export default posts;