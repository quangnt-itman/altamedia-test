import { FETCH_COMMENTS } from "../constants/ActionType";

let initialState = {
	comments: [],
};
export const commentReducer = ( state = initialState, action ) => {
	// console.log( action );
	switch ( action.type ) {
		case FETCH_COMMENTS:
			state.comments = action.data;
			console.log( state.comments );
			return { ...state };


		default:
			return { ...state };
	}
};
