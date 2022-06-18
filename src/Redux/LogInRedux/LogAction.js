import axios from "axios";

  // ACTIONS
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_LODING = 'LOGIN_LODING';

export const LOGOUT = 'LOGOUT';

// ACTION CREATORS

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const logoutUser = () => ({ type: LOGOUT})

export const loginSuccessData = (data,navigate ) => (dispatch) => {

    dispatch(loginLoding());
    axios.post("https://covid19db1.herokuapp.com/login", data).then(({ data }) => {
        dispatch(loginSuccess(data))
        console.log(data)
      
        setTimeout(() => { navigate("/"); }, 3000)
    }).catch((err) => {
        dispatch(loginError())
       alert("please check your email or password")
    });
}