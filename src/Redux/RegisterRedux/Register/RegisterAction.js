import axios from "axios";
export const REGISTER_LOADING="REGISTER_LOADING";
export const REGISTER_ERROR="REGISTER_ERROR";
export const REGISTER_SUCCESS="REGISTER_SUCCESS";

export const register_loading=()=>({type:REGISTER_LOADING});
export const register_error=()=>({type:REGISTER_ERROR});
export const register_success=(payload)=>({type:REGISTER_SUCCESS , payload});

export const RegisterHandler=(data,notify,notify2,navigate)=>(dispatch)=>{

          dispatch(register_loading())
    axios
    .post("http://localhost:9999/register", data)
    .then((res) => {
      if (res) {
          dispatch(register_success(res.data))
        notify();
        setTimeout(()=>{navigate("/Login")},3000)
      }
    })
    .catch((error) => {
      notify2();
      dispatch(register_error())
    });         
}

