import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER, SET_REDIRECT_TO } from "../actions/Types";

const initialState = { 
    status: 0,
    message: "",
    user: {},
    token: "",
    isAuthenticated: false,
    redirectTo: "/manager/index"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message
            };
            break;
        
        case LOGIN_USER_SUCCESS:
            return { 
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            };
            break;

        case LOGIN_USER_FAIL:
            return {
                ...state,
                user: {},
                token: "",
                isAuthenticated: false
            };
            break;

        case LOGOUT_USER:
            return {
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                user: {},
                token: "",
                isAuthenticated: false,
                redirectTo: "/manager/index"
            };
            break;

        case SET_REDIRECT_TO:
            return { 
                ...state,
                redirectTo: action.payload.redirectTo
            };
            break;

        default:
            return state;
            break;
    }
}