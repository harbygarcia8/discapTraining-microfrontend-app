import axios from "axios";
import { getUsers } from "../apis/GetUsers";
import { urlBase } from "../apis/apiBase";
import getToken from "./authToken";

export const MenuData = async () => {
  return new Promise((resolve, reject) => {
    getMenuData().then((data) => {
        resolve(data);
    });
  });
};

export async function getMenuData() {
  const { access_token } = await getToken();
  const url = urlBase + getUsers;
  const authorization = `Bearer ${access_token}`
  const headers = {
    'Authorization': authorization
  };
  console.log(authorization)
  try {
    const response = await axios.get(url, {headers})
    const data = response.data; // Obtenemos los datos de la respuesta de la API
    console.log('Datos recibidos:', data);
    return data;

  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
  
    // const response = await axios.get(url, {headers});
    //   const dataMenu = response.results;
    //   console.log(dataMenu);
    //   return dataMenu;
    // } catch (error) {
    //   console.log('testersdf',error);
    // }
}