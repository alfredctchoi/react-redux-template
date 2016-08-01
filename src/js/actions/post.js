const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const ENUMS = {
    LOADING_POSTS: 'LOADING_POSTS',
    LOADED_POSTS: 'LOADED_POSTS',
    SELECT_POST: 'SELECT_POST',
    LOADING_POST_COMMENTS: 'LOADING_POST_COMMENTS',
    LOADED_POST_COMMENTS: 'LOADED_POST_COMMENTS'
};

const loadingPosts = () => {
    return {
        type: ENUMS.LOADING_POSTS
    }
};

const loadedPosts = (posts) => {
    return {
        type: ENUMS.LOADED_POSTS,
        posts: posts
    }
};

const shouldFetchComments = (state) => {
    const {comments, selectedPostId} = state.postList;
    return comments[selectedPostId] === undefined;
};

export const getPosts = () => {
    return dispatch => {
        dispatch(loadingPosts());
        return fetch(`${ROOT_URL}/posts`)
            .then(res => res.json())
            .then(json => dispatch(loadedPosts(json)));
    }
};

export const selectPost = (id) => {
    return {
        type: ENUMS.SELECT_POST,
        postId: id
    }
};

const loadingComments = () => {
    return {
        type: ENUMS.LOADING_POST_COMMENTS
    }
};

const loadedComments = (postId, comments) => {
    return {
        type: ENUMS.LOADED_POST_COMMENTS,
        postId,
        comments
    }
};

const fetchComments = (state) => {
    const {selectedPostId} = state.postList;
    return dispatch => {
        dispatch(loadingComments());
        return fetch(`${ROOT_URL}/posts/${selectedPostId}/comments`)
            .then(res => res.json())
            .then(json => dispatch(loadedComments(selectedPostId, json)))
    }
};

export const loadCommentsIfNeeded = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (shouldFetchComments(state)) {
            return dispatch(fetchComments(state));
        }
    };
};