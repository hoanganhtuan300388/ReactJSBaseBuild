import { FLASH_MESSAGE, CLOSE_FLASH_MESSAGE } from "./Types";

export function flash(message, type) {
    return {
        type: FLASH_MESSAGE,
        payload: { message: message, type: type }
    };
}

export function closeFlash(id) {
    return {
        type: CLOSE_FLASH_MESSAGE,
        payload: { id: id }
    };
} 