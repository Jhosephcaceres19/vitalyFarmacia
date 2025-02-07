import { Factura } from "./FacturaInterface";
export interface Usuario {
    id: number;
    nombre: string;
    rol: "admin" | "usuario";  // Tipo enum
    ci: string;
    telefono: string;
    direccion: string;
    correoelectronico: string;
    contrasena: string;
    facturas: Factura[];  // Relación con las facturas
  }
  
  export interface UsuarioCreate {
    nombre: string;
    rol: "admin" | "usuario";
    ci: string;
    telefono: string;
    direccion: string;
    correoelectronico: string;
    contrasena: string;
  }
  