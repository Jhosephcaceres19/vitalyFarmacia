import { Proveedor } from "./ProveedorInterface";
import { DetalleFactura } from "./DetalleFacturaInterface";
export interface Medicamento {
    id: number;
    nombremedicamento: string;
    medicamentocontrolado: boolean;
    codigo: string;
    cantidad: number;
    lote: string;
    fecha_vencimiento: string;  // Tipo Date en formato string
    precio_unitario: number;
    detalle: string | null;
    proveedor_id: number;  // Relación con proveedor
    proveedor: Proveedor;  // Relación con proveedor
    detalles: DetalleFactura[];  // Relación con detalle factura
  }
  
  export interface MedicamentoCreate {
    nombremedicamento: string;
    medicamentocontrolado: boolean;
    codigo: string;
    cantidad: number;
    lote: string;
    fecha_vencimiento: string;  // Tipo Date en formato string
    precio_unitario: number;
    detalle?: string;
    proveedor_id: number;
  }
  