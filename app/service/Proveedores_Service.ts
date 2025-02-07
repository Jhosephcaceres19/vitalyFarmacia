import api from "../api/api";
import { Proveedor, ProveedorCreate } from "../interface/ProveedorInterface"; // Importa las interfaces necesarias

// Obtener todos los proveedores
export const getProveedores = async (skip: number = 0, limit: number = 10): Promise<Proveedor[]> => {
  try {
    const response = await api.get("/proveedores", {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los proveedores:", error);
    throw error; // Re-lanza el error para manejarlo donde se llame
  }
};

// Obtener un proveedor por ID
export const getProveedor = async (proveedorId: number): Promise<Proveedor> => {
  try {
    const response = await api.get(`/proveedores/${proveedorId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el proveedor:", error);
    throw error;
  }
};

// Crear un nuevo proveedor
export const createProveedor = async (proveedor: ProveedorCreate): Promise<Proveedor> => {
  try {
    const response = await api.post("/proveedores", proveedor);
    return response.data;
  } catch (error) {
    console.error("Error al crear el proveedor:", error);
    throw error;
  }
};
