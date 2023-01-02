const API_URL = "https://rickandmortyapi.com/api";
export const sendRequest = async (method, url="", body = null) => {
    console.log(`Request info: method -> ${method}, url -> ${API_URL}/${url}`);
    return fetch(`${API_URL}/${url}`, {
        method,
        body,
    }).then((response) => response.json());
};

export const get = (url) => sendRequest('GET', url);