import { LOGIN_ERROR, LOGIN_LODING, LOGIN_SUCCESS, LOGOUT } from "./LogAction";

const initialState = {
    isAuthenticated: false,
    token: "",
    user: {},
    loding: false,
    error: false
}
export const LogReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LODING: return { ...store, loding: true };

        case LOGIN_ERROR: return { ...store, loding: false, error: true };

        case LOGIN_SUCCESS: return { loding: false, error: false, isAuthenticated: true, token: payload.token, user: payload };

        case LOGOUT: return { ...initialState }

        default: return store;
    }
}