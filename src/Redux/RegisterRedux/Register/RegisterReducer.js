import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./RegisterAction"

 const initialState={
     loading:false,
     error:false,
     data:[]
 }
export const RegisterReducer=(store=initialState,{type,payload})=>{
      switch(type){
          case REGISTER_LOADING : return {...store, loading:true}
          case REGISTER_ERROR: return {...store,loading:false,error:true}
          case REGISTER_SUCCESS:return {...store, loading:false ,error:false,data:payload}
          default: return store
      }
   
}