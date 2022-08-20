import apiClient from './clientTokenAuth'

const endpoint = "/collection";

export const postCollection = async (token, name, cancelToken)=>{
    const response = await apiClient(token, cancelToken).post(endpoint,{name});
    return response.ok
}

export const putCollection = async (token, id, name, cancelToken)=>{
    const response = await apiClient(token, cancelToken).put(endpoint+'/'+id,{name});
    return response.ok
}

export const deleteCollection = async (token, id, cancelToken)=>{
    const response = await apiClient(token, cancelToken).delete(endpoint+'/'+id);
    return response.ok
}