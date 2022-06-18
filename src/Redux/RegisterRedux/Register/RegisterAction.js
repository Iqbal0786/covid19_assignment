import axios from "axios";
export const REGISTER_LOADING="REGISTER_LOADING";
export const REGISTER_ERROR="REGISTER_ERROR";
export const REGISTER_SUCCESS="REGISTER_SUCCESS";

export const register_loading=()=>({type:REGISTER_LOADING});
export const register_error=()=>({type:REGISTER_ERROR});
export const register_success=(payload)=>({type:REGISTER_SUCCESS , payload});

export const RegisterHandler=(data,navigate)=>(dispatch)=>{

          dispatch(register_loading())
    axios
    .post("https://covid19db1.herokuapp.com/register", data)
    .then((res) => {
      if (res) {
          dispatch(register_success(res.data))
            alert("sucessfully registered ")
        setTimeout(()=>{navigate("/login")},3000)
      }
    })
    .catch((error) => {
      alert("please check your email or password")
      dispatch(register_error())
    });         
}

