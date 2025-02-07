import api from "../api/api";
import { Usuario, UsuarioCreate } from "../interface/UsuarioInterface"; // Importa la interfaz

// Obtener todos los usuarios
export const getUsuarios = async (skip: number = 0, limit: number = 10): Promise<Usuario[]> => {
  try {
    const response = await api.get("/usuarios", {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error; // Re-lanza el error para manejarlo donde se llame
  }
};

// Obtener un usuario por ID
export const getUsuario = async (usuarioId: number): Promise<Usuario> => {
  try {
    const response = await api.get(`/usuarios/${usuarioId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

// Crear un nuevo usuario
export const createUsuario = async (usuario: UsuarioCreate): Promise<Usuario> => {
  try {
    const response = await api.post("/usuarios", usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
