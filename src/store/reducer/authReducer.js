import { authActionType as actionType } from '../action/actionType';

const INITIAL_STATE = {
	isLoggedIn: false,
	user: {
		name: '',
		expires_at: '',
		jwttoken: '',
		authorities: [],
	},
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default authReducer;
