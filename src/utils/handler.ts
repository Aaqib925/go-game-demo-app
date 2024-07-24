import useAuthStore from "../store/Auth";
import StatusCodes from "../constants/statusCodes";

const setIsLoggedIn = useAuthStore.getState().setIsLoggedIn;

export const handleFetchError = async (res: any) => {
    if (res.status === StatusCodes.SUCCESS_NO_CONTENT) {
        return { success: true }
    }
    else if (res.status >= StatusCodes.BAD_REQUEST && res.status < StatusCodes.CONNECTION_TIMED_OUT) {
        const response = await res.clone().json();
        let errRes = {
            ...response,
            message: response?.message,
            status: response?.status
        };
        if (res.status === StatusCodes.UNAUTHORIZED) {
            setIsLoggedIn(false);
        }
        throw errRes;
    }

    if (res.status === 204) {
        return { success: true }
    }
    return res.json();
};
