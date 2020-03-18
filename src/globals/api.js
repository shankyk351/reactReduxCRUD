import axios from 'axios';
import {urls} from './constant';

// create axios client with default
export const apiRequest = async (type, url, data)=>{
    let req;
    switch(type){
        case 'get':
            req = await axios.get(urls.baseURL+url);
            break;
        case 'post':
            req = await axios.post(urls.baseURL+url, data);
            break;
        case 'delete':
            req = await axios.delete(urls.baseURL+url);
            break;
        default:
            return;
    }
    return req;
}
