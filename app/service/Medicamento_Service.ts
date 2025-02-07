import api from "../api/api";
import { Medicamento, MedicamentoCreate } from "../interface/MedicamentoInterface"; // Importa las interfaces necesarias

// Obtener todos los medicamentos
export const getMedicamentos = async (skip: number = 0, limit: number = 10): Promise<Medicamento[]> => {
  try {
    const response = await api.get("/medicamentos", {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los medicamentos:", error);
    throw error; // Re-lanza el error para manejarlo donde se llame
  }
};

// Obtener un medicamento por ID
export const getMedicamento = async (medicamentoId: number): Promise<Medicamento> => {
  try {
    const response = await api.get(`/medicamentos/${medicamentoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el medicamento:", error);
    throw error;
  }
};

// Crear un nuevo medicamento
export const createMedicamento = async (medicamento: MedicamentoCreate): Promise<Medicamento> => {
  try {
    const response = await api.post("/medicamentos", medicamento);
    return response.data;
  } catch (error) {
    console.error("Error al crear el medicamento:", error);
    throw error;
  }
};
