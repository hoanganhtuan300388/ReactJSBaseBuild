import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { reducer as form } from "redux-form";

import manager from "./reducers/ManagerReducer";
import category from "./reducers/CategoryReducer";
import author from "./reducers/AuthorReducer";
import tag from "./reducers/TagReducer";
import book from "./reducers/BookReducer";
import auth from "./reducers/AuthReducer";
import flash from "./reducers/FlashReducer";

export default createStore(
    combineReducers({ 
        form,
        manager,
        category,
        author,
        tag,
        book,
        auth,
        flash
    }),
    {},
    applyMiddleware(thunk, promise, createLogger)
);