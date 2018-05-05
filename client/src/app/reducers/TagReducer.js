import { GET_TAGS, GET_TAG, CREATE_TAG, EDIT_TAG, DELETE_TAG, GET_AUTHOR_COMBOBOX } from "../actions/Types";

const initialState = { 
    status: 0,
    message: '',
    data: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TAGS:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data
            };
            break;

        case GET_TAG:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {} 
            };
            break;
            
        case CREATE_TAG:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case EDIT_TAG:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case DELETE_TAG:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message
            };
            break;

        default:
            return state;
            break;
    }
}