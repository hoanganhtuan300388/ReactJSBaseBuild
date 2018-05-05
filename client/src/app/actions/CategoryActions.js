import axios from "axios";

import { API_URL, GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, GET_COMBOBOX_CATEGORIES } from "./Types";

export function getCategories(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/category/adminList`, { params })
            .then((response) => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getCategory(id) {
    return (dispatch) => {
        let params = { id: id };
        return axios.get(`${API_URL}/category/adminGet`, { params })
            .then((response) => {
                dispatch({
                    type: GET_CATEGORY,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function createCategory(data) {
    data._method = "POST";

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
        let headers = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-My-Custom-Header': 'foo'
            }
        };

        return axios.post(`${API_URL}/account/updateProfile`, formData, headers)
            .then((response) => {
                dispatch({
                    type: CREATE_CATEGORY,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function editCategory(id, data) {
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
        return axios.post(`${API_URL}/category/adminEdit`, formData)
            .then((response) => {
                dispatch({
                    type: EDIT_CATEGORY,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function deleteCategory(id) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("id", id);
    urlSearchParams.append("_method", "DELETE");

    return (dispatch) => {
        return axios.post(`${API_URL}/category/adminDelete`, urlSearchParams)
            .then((response) => {
                dispatch({
                    type: DELETE_CATEGORY,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}

export function getComboboxCategories(params) {
    return (dispatch) => {
        return axios.get(`${API_URL}/category/adminComboList`)
            .then((response) => {
                dispatch({
                    type: GET_COMBOBOX_CATEGORIES,
                    payload: response.data
                });
            }).catch((error) => {
                throw (error);
            });
    }
}