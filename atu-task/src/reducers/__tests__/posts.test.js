import reducer from '../posts'
import { initialState } from '../posts'
import { 
    GET_POSTS_REQUEST, 
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POST_DETAILS_REQUEST,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_AUTHOR_SUCCESS,
    GET_POST_AUTHOR_FAIL
} from '../../constants/index';

const post = {
    id: 1, 
    userId: 1, 
    title: 'Post title', 
    body: 'Post body'
}

const user = {
    id: 1, 
    name: 'User name' 
}

describe('Returns the correct state when', () => {
    it('it is INITIAL_STATE', () => {
      expect(reducer(undefined, {})).toMatchSnapshot()
    })

    it('it receives GET_POSTS_REQUEST', () => {
        const action = { 
            type: GET_POSTS_REQUEST
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POSTS_SUCCESS', () => {
        const action = { 
            type: GET_POSTS_SUCCESS, 
            payload: { posts: [ post ] }
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POSTS_FAIL', () => {
        const action = { 
            type: GET_POSTS_FAIL
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POST_DETAILS_REQUEST', () => {
        const action = { 
            type: GET_POST_DETAILS_REQUEST
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POST_DETAILS_SUCCESS', () => {
        const action = { 
            type: GET_POST_DETAILS_SUCCESS, 
            payload: { post: post }
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POST_AUTHOR_SUCCESS', () => {
        const action = { 
            type: GET_POST_AUTHOR_SUCCESS, 
            payload: { user: user }
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });

    it('it receives GET_POST_AUTHOR_FAIL', () => {
        const action = { 
            type: GET_POST_AUTHOR_FAIL
        };
        expect(reducer(initialState, action)).toMatchSnapshot()
    });
})

