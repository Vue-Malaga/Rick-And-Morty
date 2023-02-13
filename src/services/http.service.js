const API_URL = "https://rickandmortyapi.com/api";
export const sendRequest = (method, url="", body = null) => {
    return fetch(`${API_URL}/${url}`, {
        method,
        body,
    }).then((response) => response.json());
};

export const get = (url) => sendRequest('GET', url);
export const getById = (url, id) => sendRequest('GET', `${url}/${id}`);