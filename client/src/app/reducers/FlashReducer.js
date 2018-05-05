import shortid from "shortid";
import findIndex from "lodash/findIndex";

import { FLASH_MESSAGE, CLOSE_FLASH_MESSAGE } from "../actions/Types";

export default function (state = [], action = {}) {
    switch (action.type) {
        case FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    message: action.payload.message,
                    type: action.payload.type
                }
            ];
            break;

        case CLOSE_FLASH_MESSAGE:
            const index = findIndex(state, { id: action.payload.id });
            
            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }

            return state;
            break;

        default:
            return state;
            break;
    }
}