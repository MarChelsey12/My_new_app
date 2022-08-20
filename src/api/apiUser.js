import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint = "/user";

export const postUser = async (username, email, password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClientNoAuth(cancelToken).post(endpoint,{username,email,password});
    if(response.ok){
        user=response.data
    }else{
        error="Unprocessable entity due to semantic errors."
    }
    return{
        error,
        user,
    }
}
export const putUser = async(token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint, data);
    return response.ok
}

export const deleteUser = async(token, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint);
    return response.ok
}
