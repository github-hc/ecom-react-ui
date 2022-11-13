import axios from 'axios';

export const AxiosProvider = {
    get,
    post
}

async function get<T>(url: string, params?: any){
    return await axios.get<T>(url, {
        params: params
    });
}

async function post<T>(url: string, body: any){
    return await axios.post<T>(url, body);
}

// axios.interceptors.request.use(
//     (request)=>{
//         request.headers ={}
//         request.withCredentials = true
//     },
//     (error)=>{

//     }
// );