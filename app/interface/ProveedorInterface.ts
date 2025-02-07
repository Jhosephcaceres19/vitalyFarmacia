import { Medicamento } from "./MedicamentoInterface";
export interface Proveedor {
    id: number;
    nombre: string;
    telefono: string;
    direccion: string;
    correoelectronico: string;
    medicamentos: Medicamento[];  // Relación con los medicamentos
  }
  
  export interface ProveedorCreate {
    nombre: string;
    telefono: string;
    direccion: string;
    correoelectronico: string;
  }
  