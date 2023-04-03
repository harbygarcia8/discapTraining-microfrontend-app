import axios from "axios";
import { urlToken, username, password } from "../apis/authenticationToken";
import { urlBase } from "../apis/apiBase";

const getToken = async () => {
    const urlAuth = urlBase + urlToken;
    const data = {
        username: username,
        password: password
    };
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post(urlAuth, data, {headers});
        const access_token = response.data;
        console.log('URL TOKEN: ', urlAuth);
        console.log(access_token);
        return access_token;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}   

export default getToken;
