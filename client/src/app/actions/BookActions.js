import axios from "axios";

import { API_URL, GET_BOOKS, GET_BOOK, CREATE_BOOK, EDIT_BOOK, DELETE_BOOK } from "./Types";

export function getBooks(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/book/adminList`, { params })
            .then((response) => {
                dispatch({
                    type: GET_BOOKS,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getBook(id) {
    return (dispatch) => {
        let params = { id: id };
        return axios.get(`${API_URL}/book/adminGet`, { params })
            .then((response) => {
                dispatch({
                    type: GET_BOOK,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function createBook(data) {
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
        return axios.post(`${API_URL}/book/adminAdd`, formData)
            .then((response) => {
                dispatch({
                    type: CREATE_BOOK,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function editBook(id, data) {
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
        return axios.post(`${API_URL}/book/adminEdit`, formData)
            .then((response) => {
                dispatch({
                    type: EDIT_BOOK,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function deleteBook(id) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("id", id);
    urlSearchParams.append("_method", "DELETE");

    return (dispatch) => {
        return axios.post(`${API_URL}/book/adminDelete`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: DELETE_BOOK,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}