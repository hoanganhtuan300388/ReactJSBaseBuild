import axios from "axios";

import { API_URL, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER, SET_REDIRECT_TO } from "./Types";

export function loginUser(params) {
    const querystring = require('querystring');

    return (dispatch) => {
        return axios.post(`${API_URL}/manager/adminLogin`, querystring.stringify(params))
            .then((response) => {
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                });
                
                if(response.data.status === 1) {
                    dispatch(loginUserSuccess(
                        response.data.data.item,
                        response.data.data.token
                    ));
                } else {
                    dispatch(loginUserFail());
                }
            }).catch((error) => {
                throw (error);
            });
    }
}

function loginUserSuccess(user, token) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: { user: user, token: token }
    };
}

function loginUserFail() {
    return {
        type: LOGIN_USER_FAIL
    };
}

export function logoutUser() {
    return (dispatch) => {
        return axios.get(`${API_URL}/manager/adminLogout`)
            .then((response) => {
                dispatch({
                    type: LOGOUT_USER,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function setRedirectTo(redirectTo) {
    return {
        type: SET_REDIRECT_TO,
        payload: { redirectTo: redirectTo }
    };
}