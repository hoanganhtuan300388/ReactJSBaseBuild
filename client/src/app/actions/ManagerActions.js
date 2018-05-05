import axios from "axios";

import { API_URL, GET_MANAGERS, GET_MANAGER, CREATE_MANAGER, EDIT_MANAGER, DELETE_MANAGER } from "./Types";

export function getManagers(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/manager/adminList`, { params })
            .then((response) => {
                dispatch({
                    type: GET_MANAGERS,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getManager(id) {
    return (dispatch) => {
        let params = { id: id };
        return axios.get(`${API_URL}/manager/adminGet`, { params })
            .then((response) => {
                dispatch({
                    type: GET_MANAGER,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function createManager(data) {
    let urlSearchParams = new URLSearchParams();

    Object.keys(data).map((key) => {
        if(data[key] != null)
            urlSearchParams.append(key, data[key]);
    })

    return (dispatch) => {
        return axios.post(`${API_URL}/manager/adminAdd`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: CREATE_MANAGER,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function editManager(id, data) {
    data.id = id;
    data._method = "PUT";
    
    let urlSearchParams = new URLSearchParams();

    Object.keys(data).map((key) => {
        if(data[key] != null)
            urlSearchParams.append(key, data[key]);
    })

    return (dispatch) => {
        return axios.post(`${API_URL}/manager/adminEdit`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: EDIT_MANAGER,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function deleteManager(id) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("id", id);
    urlSearchParams.append("_method", "DELETE");

    return (dispatch) => {
        return axios.post(`${API_URL}/manager/adminDelete`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: DELETE_MANAGER,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}