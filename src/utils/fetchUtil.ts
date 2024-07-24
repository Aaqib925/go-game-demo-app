import { handleFetchError } from "./handler";



export const fetchUtil = async (data: any) => {
    const {
        url,
        method = "GET",
        body = null,
        token = null,
        image = false,
        abortSignal = null
    } = data;
    let headers = {};

    if (!image) {
        headers = { "Content-Type": "application/json" };
    }
    if (token) {
        headers = { ...headers, authorization: `${token}` };
    }
    return fetch(`http://localhost:3001/v1${url}`, {
        method,
        headers,
        body,
        ...(abortSignal && { signal: abortSignal })
    }).then((res) => handleFetchError(res));
};
