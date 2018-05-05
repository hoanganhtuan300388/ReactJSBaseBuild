import axios from "axios";

import { API_URL, GET_AUTHORS, GET_AUTHOR, CREATE_AUTHOR, EDIT_AUTHOR, DELETE_AUTHOR, GET_COMBOBOX_AUTHORS } from "./Types";

export function getAuthors(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/author/adminList`, { params })
            .then((response) => {
                dispatch({
                    type: GET_AUTHORS,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getAuthor(id) {
    return (dispatch) => {
        let params = { id: id };
        return axios.get(`${API_URL}/author/adminGet`, { params })
            .then((response) => {
                dispatch({
                    type: GET_AUTHOR,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function createAuthor(data) {
    let formData = new FormData();

    Object.keys(data).map((key) => {
        if(data[key] !== null) {
            if (data[key] instanceof FileList) {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        }
    });

    return (dispatch) => {
        return axios.post(`${API_URL}/author/adminAdd`, formData)
            .then((response) => {
                dispatch({
                    type: CREATE_AUTHOR,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function editAuthor(id, data) {
    data.id = id;
    data._method = "PUT";

    let formData = new FormData();

    Object.keys(data).map((key) => {
        if(data[key] !== null) {
            if (data[key] instanceof FileList) {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        }
    });

    return (dispatch) => {
        return axios.post(`${API_URL}/author/adminEdit`, formData)
            .then((response) => {
                dispatch({
                    type: EDIT_AUTHOR,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function deleteAuthor(id) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("id", id);
    urlSearchParams.append("_method", "DELETE");

    return (dispatch) => {
        return axios.post(`${API_URL}/author/adminDelete`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: DELETE_AUTHOR,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getComboboxAuthors(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/author/adminComboList`)
            .then((response) => {
                dispatch({
                    type: GET_COMBOBOX_AUTHORS,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}