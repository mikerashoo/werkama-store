import { USER_ACTIONS } from "../constants/userActions";

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: null,
	message: null, 
}
export const userReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case USER_ACTIONS.FETCH_USERS_ACTION:
			return {
				...state,
				loading: true,
			}
		case USER_ACTIONS.SHOW_USERS_ACTION: 
			return {
				...state,
				loading: false,
				data: action.users
			}
		case USER_ACTIONS.SHOW_USERS_ERROR_ACTION: 
			return {
				...state,
				loading: false,
				data: [],
				error: action.error
			}
		case USER_ACTIONS.SAVE_NEW_USER_TO_DB_ACTION:
			return {
				...state,
				loading: true, 
			}

		case USER_ACTIONS.ADD_NEW_USER_ACTION: 
			let data = state.data;
			data.push(action.user);  
			return {
				...state,
				loading: false,
				message: 'New User Added Successfully!',
				data,
			}

		default: return state;
	}
}