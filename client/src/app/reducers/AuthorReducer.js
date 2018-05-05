import { GET_AUTHORS, GET_AUTHOR, CREATE_AUTHOR, EDIT_AUTHOR, DELETE_AUTHOR, GET_COMBOBOX_AUTHORS } from "../actions/Types";

const initialState = { 
    status: 0,
    message: '',
    data: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AUTHORS:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data
            };
            break;

        case GET_AUTHOR:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {} 
            };
            break;
            
        case CREATE_AUTHOR:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case EDIT_AUTHOR:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case DELETE_AUTHOR:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message
            };
            break;

        case GET_COMBOBOX_AUTHORS:
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