import { FETCH_POSTS } from "../constants/ActionType";

let initialState = {
	posts: [],
};
export const postReducer = ( state = initialState, action ) => {
	// console.log( action );
	switch ( action.type ) {
		case FETCH_POSTS:
			state.posts = action.data;
			// console.log( state.movies );
			return { ...state };


		default:
			return { ...state };
	}
};
