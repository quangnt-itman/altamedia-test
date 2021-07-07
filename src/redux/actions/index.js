// import * as types from './../constants/ActionType.js';
import axios from 'axios';
import { FETCH_COMMENTS, FETCH_POSTS } from './../constants/ActionType';


// todo: Posts
const actFetchPosts = ( data ) => ( {
  type: FETCH_POSTS,
  data
} );
const actFetchListPosts = () => {
  return ( dispatch ) => {
    // console.log( dispatch );
    axios( {
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    } )
      .then( result => {
        // console.log( result );
        dispatch( actFetchPosts( result.data ) );
      } )
      .catch( error => {
        console.log( error );
      } );
  };
};
// todo: Comments
const actFetchComments = ( data ) => ( {
  type: FETCH_COMMENTS,
  data
} );
const actFetchListComments = ( postId ) => {
  console.log( postId );
  return ( dispatch ) => {
    // console.log( dispatch );
    axios( {
      url: `https://jsonplaceholder.typicode.com/posts/${ postId }/comments`,
      method: "GET"
    } )
      .then( result => {
        console.log( result );
        dispatch( actFetchComments( result.data ) );
      } )
      .catch( error => {
        console.log( error );
      } );
  };
};





export { actFetchListPosts, actFetchListComments };

