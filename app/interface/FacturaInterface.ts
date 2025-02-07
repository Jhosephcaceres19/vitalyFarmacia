import { DetalleFactura } from "./DetalleFacturaInterface";
import { Usuario } from "./UsuarioInterface";
export interface Factura {
    id: number;
    nombrecliente: string;
    documento: string;
    tipode_documento: string;
    tipo_comprobante: string;
    numerofactura: string;
    total: number;
    recibi_int: number;
    ca: number;
    usuario_id: number;  // Relación con el usuario
    usuario: Usuario;  // Relación con el usuario
    detalles: DetalleFactura[];  // Relación con los detalles de la factura
  }
  
  export interface FacturaCreate {
    nombrecliente: string;
    documento: string;
    tipode_documento: string;
    tipo_comprobante: string;
    numerofactura: string;
    total: number;
    recibi_int: number;
    ca: number;
    usuario_id: number;
  }
  