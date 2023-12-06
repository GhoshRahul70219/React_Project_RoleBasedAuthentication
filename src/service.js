import axios from 'axios';

const base_url = "http://demo7389246.mockable.io";
const base_header = {
    'Content-Type':'application/json',
};

//Get All function
const getAll = (path) =>{
    path = `${base_url}${path}`;
    const headers = {
        headers:{
            ...base_header
        }
    }

    return axios.get(`${path}`)
    .then(response => {
        console.log(response);
        return response;
    }).catch(error => error);
}

export {getAll};