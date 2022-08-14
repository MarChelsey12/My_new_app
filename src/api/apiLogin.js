import apiClient from './clientBasicAuth';

const endpoint = 'login';

export const getLogin = async (email, password, cancelToken) =>{
    let error;
    let user;
    
    const response = await apiClient(email, password, cancelToken).get(endpoint);
    console.log(response)
    if (response.ok){
        user = response.data
        console.log(user);
    }else if (response.status === 401){
        error = 'Invalid Email or Password'
    }else{
        error = 'An unknown error occurred. Please try again.'
    }

    return{
        error, 
        user
    }
}
