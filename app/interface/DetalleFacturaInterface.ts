import { Factura } from "./FacturaInterface";
import { Medicamento } from "./MedicamentoInterface";
export interface DetalleFactura {
    id: number;
    factura_id: number;  // Relación con la factura
    medicamento_id: number;  // Relación con el medicamento
    cantidad: number;
    precio_unitario: number;
    factura: Factura;  // Relación con la factura
    medicamento: Medicamento;  // Relación con el medicamento
  }
  
  export interface DetalleFacturaCreate {
    factura_id: number;
    medicamento_id: number;
    cantidad: number;
    precio_unitario: number;
  }
  