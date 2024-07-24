import useAuthStore from "../../store/Auth";
import { fetchUtil } from "../../utils/fetchUtil";
import { appendQueryParams } from "../../utils/urlUtils";


export const Get = async ({ url = "", params = {}, isAuthorized = true, abortSignal = null }) => {
    let token = null;
    if (isAuthorized) {
        // Set token from zustand store
        token = useAuthStore.getState().token;
    }
    return fetchUtil({
        url: Object.keys(params).length > 0 ? appendQueryParams(url, params) : url,
        token,
        abortSignal
    })
        .then((res) => {
            const { data } = res;
            return Promise.resolve(data ? data : res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const Post = async ({ url = "", body = {}, isAuthorized = true, abortSignal = null }) => {
    let token = null;
    if (isAuthorized) {
        // Set token from zustand store
        token = useAuthStore.getState().token;
    }
    return fetchUtil({
        url,
        token,
        body: JSON.stringify(body),
        method: "POST",
        abortSignal
    })
        .then((res) => {
            const { data } = res;
            return Promise.resolve(data ? data : res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const Put = async ({ url = "", body = {}, isAuthorized = true, abortSignal = null }) => {
    let token = null;
    if (isAuthorized) {
        // Set token from zustand store
        token = useAuthStore.getState().token;
    }
    return fetchUtil({
        url,
        token,
        body: JSON.stringify(body),
        method: "PUT",
        abortSignal
    })
        .then((res) => {
            const { data } = res;
            return Promise.resolve(data ? data : res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const Delete = async ({ url = "", isAuthorized = true, abortSignal = null, body = {}}) => {
    let token = null;
    if (isAuthorized) {
        // Set token from zustand store
        token = useAuthStore.getState().token;
    }
    return fetchUtil({
        url,
        token,
        method: "DELETE",
        abortSignal,
        body
    })
        .then((res) => {
            const { data } = res;
            return Promise.resolve(data ? data : res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const Patch = async ({ url = "", body = {}, isAuthorized = true, abortSignal = null }) => {
    let token = null;
    if (isAuthorized) {
        // Set token from zustand store
        token = useAuthStore.getState().token;
    }
    return fetchUtil({
        url,
        token,
        body: JSON.stringify(body),
        method: "PATCH",
        abortSignal
    })
        .then((res) => {
            const { data } = res;
            return Promise.resolve(data ? data : res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
