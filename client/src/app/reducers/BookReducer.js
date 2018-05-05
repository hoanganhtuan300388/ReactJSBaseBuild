import { GET_BOOKS, GET_BOOK, CREATE_BOOK, EDIT_BOOK, DELETE_BOOK } from "../actions/Types";

const initialState = { 
    status: 0,
    message: '',
    data: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data
            };
            break;

        case GET_BOOK:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                data: action.payload.data ? action.payload.data : {} 
            };
            break;
            
        case CREATE_BOOK:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case EDIT_BOOK:
            return { 
                ...state,
                status: action.payload.status,  
                message: action.payload.message,
                errors: action.payload.errors
            };
            break;

        case DELETE_BOOK:
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