import configureMockStore from 'redux-mock-store'
import { fetchPosts, fetchPostDetails, fetchPostAuthor } from '../index.js'
import thunk from 'redux-thunk';
import moxios from 'moxios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    beforeEach(function () {
      moxios.install()
    });
  
    afterEach(function () {
      moxios.uninstall()
    });
  
    it('fetches posts successfully', () => {
      moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
        status: 200,
        response: { data: { 
            posts: [{
            "userId":1,
            "id":1,
            "title":"Example",
            "body":"Testing",
          }] 
        }}
      });
  
      const store = mockStore({});
  
      return store.dispatch(fetchPosts())
        .then(() => {
            expect(store.getActions()).toMatchSnapshot();
        })
    })

    it('fails fetching posts', () => {
        moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
          status: 500,
          response: '[Error: Request failed with status code 500]'
        });
    
        const store = mockStore({});
    
        return store.dispatch(fetchPosts())
          .then(() => {
              expect(store.getActions()).toMatchSnapshot();
          })
      })

      it('fetches post details successfully', () => {
        moxios.stubRequest('https://jsonplaceholder.typicode.com/posts/1', {
          status: 200,
          response: { data: { 
              post: {
              "userId":1,
              "id":1,
              "title":"Example",
              "body":"Testing",
            }
          }}
        });
    
        const store = mockStore({});
    
        return store.dispatch(fetchPostDetails(1))
          .then(() => {
              expect(store.getActions()).toMatchSnapshot();
          })
      })

      it('fails to fetch post details', () => {
        moxios.stubRequest('https://jsonplaceholder.typicode.com/posts/1', {
          status: 500,
          response: '[Error: Request failed with status code 500]'
        });
    
        const store = mockStore({});
    
        return store.dispatch(fetchPostDetails(1))
          .then(() => {
              expect(store.getActions()).toMatchSnapshot();
          })
      })

      it('fetches post author successfully', () => {
        moxios.stubRequest('https://jsonplaceholder.typicode.com/users/1', {
          status: 200,
          response: { data: { 
              user: {
              "id":1,
              "name":"Example name",
            }
          }}
        });
    
        const store = mockStore({});
    
        return store.dispatch(fetchPostAuthor(1))
          .then(() => {
              expect(store.getActions()).toMatchSnapshot();
          })
      })

      it('fails to fetch post author', () => {
        moxios.stubRequest('https://jsonplaceholder.typicode.com/users/1', {
          status: 500,
          response: '[Error: Request failed with status code 500]'
        });
    
        const store = mockStore({});
    
        return store.dispatch(fetchPostAuthor(1))
          .then(() => {
              expect(store.getActions()).toMatchSnapshot();
          })
      })
  });
