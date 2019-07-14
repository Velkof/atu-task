import { 
    GET_POSTS_REQUEST, 
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POST_DETAILS_REQUEST,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_AUTHOR_SUCCESS,
    GET_POST_AUTHOR_FAIL
} from '../constants/index';

export const initialState = {
    loading: true,
    posts: [],
    selectedPost: {},
    selectedPostAuthor: {}
}

export const posts = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS_REQUEST:
            return { ...state, loading: true }
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload}
        case GET_POSTS_FAIL:
            return { ...state, loading: false }    
        case GET_POST_DETAILS_REQUEST:
            return { ...state, loading: true }    
        case GET_POST_DETAILS_SUCCESS:
                return { ...state, selectedPost: action.payload}
        case GET_POST_AUTHOR_SUCCESS:
            return { ...state, loading: false, selectedPostAuthor: action.payload}
        case GET_POST_AUTHOR_FAIL:
            return { ...state, loading: false }                            
        default:
            return state;
    }
}

export default posts
  