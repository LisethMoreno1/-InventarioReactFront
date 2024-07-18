import config from '../../../config/config.json';
import { GenreInter } from '../../../interfaces/typeOfGenders/typeOfGenders';
 
const baseUrl = config.baseUrl;


/* METODO GET */
export const getTypeOfGenders = async (): Promise<GenreInter[]> => {
    const response = await fetch(`${baseUrl}/typeOfGenders`, {
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



/* METODO POST */
export const postTypeOfGenders = async (typeOfGendersRequest: GenreInter) => {
  const response = await fetch(`${baseUrl}/typeOfGenders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(typeOfGendersRequest),
  });

  if (!response.ok) {
    throw new Error('La respuesta de la red no era correcta');
  }

  return await response.json();
};


/* METODO DELETE */
export const deleteTypeOfGenders = async (GenreInter: GenreInter) => {
  const response = await fetch(`${baseUrl}/typeOfGenders/${GenreInter.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('La respuesta de la red no era correcta');
  }

  return await response.json();
};