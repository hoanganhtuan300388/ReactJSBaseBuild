import { GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, GET_COMBOBOX_CATEGORIES } from "../actions/Types";

const initialState = {
    status: 0,
    message: '',
    data: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data
            };
            break;

        case GET_CATEGORY:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {}
            };
            break;

        case CREATE_CATEGORY:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case EDIT_CATEGORY:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case DELETE_CATEGORY:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message
            };
            break;

        case GET_COMBOBOX_CATEGORIES:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {}
            };
            break;

        default:
            return state;
            break;
    }
}