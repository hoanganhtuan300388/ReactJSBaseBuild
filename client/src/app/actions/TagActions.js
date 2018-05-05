import axios from "axios";

import { API_URL, GET_TAGS, GET_TAG, CREATE_TAG, EDIT_TAG, DELETE_TAG } from "./Types";

export function getTags(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/tag/adminList`, { params })
            .then((response) => {
                dispatch({
                    type: GET_TAGS,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getTag(id) {
    return (dispatch) => {
        let params = { id: id };
        return axios.get(`${API_URL}/tag/adminGet`, { params })
            .then((response) => {
                dispatch({
                    type: GET_TAG,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function createTag(data) {
    let urlSearchParams = new URLSearchParams();

    Object.keys(data).map((key) => {
        if(data[key] != null)
            urlSearchParams.append(key, data[key]);
    })

    return (dispatch) => {
        return axios.post(`${API_URL}/tag/adminAdd`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: CREATE_TAG,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function editTag(id, data) {
    data.id = id;
    data._method = "PUT";

    let urlSearchParams = new URLSearchParams();

    Object.keys(data).map((key) => {
        if(data[key] != null)
            urlSearchParams.append(key, data[key]);
    })

    return (dispatch) => {
        return axios.post(`${API_URL}/tag/adminEdit`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: EDIT_TAG,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function deleteTag(id) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("id", id);
    urlSearchParams.append("_method", "DELETE");

    return (dispatch) => {
        return axios.post(`${API_URL}/tag/adminDelete`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: DELETE_TAG,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}