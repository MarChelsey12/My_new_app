import apiClient from './clientTokenAuth'

const endpoint = "/recipe";

export const postRecipe = async (token, data, cancelToken)=>{
    const response = await apiClient(token, cancelToken).post(endpoint,data);
    return response.ok
}

export const putRecipe = async (token, id, data, cancelToken)=>{
    const response = await apiClient(token, cancelToken).put(endpoint+'/'+id, data);
    return response.ok
}

export const deleteRecipe = async (token, id, cancelToken)=>{
    const response = await apiClient(token, cancelToken).delete(endpoint+'/'+id);
    return response.ok
}