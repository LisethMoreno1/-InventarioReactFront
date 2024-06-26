import { LoginData, LoginResponse } from "../../../interfaces/Login/Login";

const baseUrl = 'http://localhost:3000/auth';



export const postLogin = async (data: LoginData): Promise<LoginResponse> => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('La respuesta de la red no era correcta');
      }
    
      return response.json();
}