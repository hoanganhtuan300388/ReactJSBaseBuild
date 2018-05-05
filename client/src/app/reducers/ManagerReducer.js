import { GET_MANAGERS, GET_MANAGER, CREATE_MANAGER, EDIT_MANAGER, DELETE_MANAGER } from "../actions/Types";

const initialState = { 
    status: 0,
    message: '',
    data: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MANAGERS:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data
            };
            break;

        case GET_MANAGER:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {} 
            };
            break;
            
        case CREATE_MANAGER:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case EDIT_MANAGER:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case DELETE_MANAGER:
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