import { User } from "../../../interfaces/Users/User";

const baseUrl = 'http://localhost:3000/api'; 


export const PostUsers = async (data: User): Promise<User[]> => {
  const response = await fetch(`${baseUrl}/user`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  });
  if (!response.ok) {
    throw new Error('La respuesta de la red no era correcta');
  }
  return await response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${baseUrl}/user`, {
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

