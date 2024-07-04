import { Roles } from "../../../interfaces/Rol/rol";
import config from '../../../config/config.json';
 
const baseUrl = config.baseUrl;


/* METODO GET */
export const getRoles = async (): Promise<Roles[]> => {
    const response = await fetch(`${baseUrl}/roles`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
     
  
    });
    if (!response.ok) {
      throw new Error('La respuesta de la red no era correcta');
    }
    return await response.json();
  };
  
  