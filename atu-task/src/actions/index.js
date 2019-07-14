import axios from 'axios';
import { 
    GET_POSTS_REQUEST, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAIL, 
    GET_POST_DETAILS_REQUEST,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL,
    GET_POST_AUTHOR_REQUEST,
    GET_POST_AUTHOR_SUCCESS,
    GET_POST_AUTHOR_FAIL,
 } from '../constants/index';

export function fetchPosts() {
  return async function(dispatch) {
      dispatch({type: GET_POSTS_REQUEST});
    
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
          dispatch({type: GET_POSTS_SUCCESS, payload: response.data})
      })
      .catch((err) => {
          dispatch({type: GET_POSTS_FAIL, payload: err})
      })
  }
}

export function fetchPostDetails(id) {
    return function(dispatch) {
        dispatch({type: GET_POST_DETAILS_REQUEST});
  
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)       
        .then((response) => {
            dispatch(fetchPostAuthor(response.data.userId))
            dispatch({type: GET_POST_DETAILS_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: GET_POST_DETAILS_FAIL, payload: err})
        })
    }
  }


  export function fetchPostAuthor(userId) {
    return function(dispatch) {
        dispatch({type: GET_POST_AUTHOR_REQUEST});
  
        return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)       
        .then((response) => {
            dispatch({type: GET_POST_AUTHOR_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: GET_POST_AUTHOR_FAIL, payload: err})
        })
    }
  }
