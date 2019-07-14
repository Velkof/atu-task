import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import {Route, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import './index.scss';
import PostList from './containers/postList'
import PostDetails from './containers/postDetails'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={PostList} />
      <Route exact path="/post/:id" component={PostDetails} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
