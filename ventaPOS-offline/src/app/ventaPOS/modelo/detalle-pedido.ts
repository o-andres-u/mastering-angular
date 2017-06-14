export class DetallePedido {

    private codigoVentaProducto: string;
    private descripcionProducto: string;
    private descripcionDetalladaProducto: string;
    private codigoUnidadVenta: string;
    private cantidad: number;
    private precioUnitario: number;
    private porcentajeDescDetalle: number;
    private valorDescuentoDetalle: number;
    private impuestoDetalle: number;
    private precioTotalDetalle: number;


    constructor(
        $codigoVentaProducto: string,
        $descripcionProducto: string,
        $descripcionDetalladaProducto: string,
        $codigoUnidadVenta: string, $cantidad: number,
        $precioUnitario: number,
        $porcentajeDescDetalle: number,
        $valorDescuentoDetalle: number,
        $impuestoDetalle: number,
        $precioTotalDetalle: number) {
        this.codigoVentaProducto = $codigoVentaProducto;
        this.descripcionProducto = $descripcionProducto;
        this.descripcionDetalladaProducto = $descripcionDetalladaProducto;
        this.codigoUnidadVenta = $codigoUnidadVenta;
        this.cantidad = $cantidad;
        this.precioUnitario = $precioUnitario;
        this.porcentajeDescDetalle = $porcentajeDescDetalle;
        this.valorDescuentoDetalle = $valorDescuentoDetalle;
        this.impuestoDetalle = $impuestoDetalle;
        this.precioTotalDetalle = $precioTotalDetalle;
    }


    public get $codigoVentaProducto(): string {
        return this.codigoVentaProducto;
    }

    public set $codigoVentaProducto(value: string) {
        this.codigoVentaProducto = value;
    }

    public get $descripcionProducto(): string {
        return this.descripcionProducto;
    }

    public set $descripcionProducto(value: string) {
        this.descripcionProducto = value;
    }

    public get $descripcionDetalladaProducto(): string {
        return this.descripcionDetalladaProducto;
    }

    public set $descripcionDetalladaProducto(value: string) {
        this.descripcionDetalladaProducto = value;
    }

    public get $codigoUnidadVenta(): string {
        return this.codigoUnidadVenta;
    }

    public set $codigoUnidadVenta(value: string) {
        this.codigoUnidadVenta = value;
    }

    public get $cantidad(): number {
        return this.cantidad;
    }

    public set $cantidad(value: number) {
        this.cantidad = value;
    }

    public get $precioUnitario(): number {
        return this.precioUnitario;
    }

    public set $precioUnitario(value: number) {
        this.precioUnitario = value;
    }

    public get $porcentajeDescDetalle(): number {
        return this.porcentajeDescDetalle;
    }

    public set $porcentajeDescDetalle(value: number) {
        this.porcentajeDescDetalle = value;
    }

    public get $valorDescuentoDetalle(): number {
        return this.valorDescuentoDetalle;
    }

    public set $valorDescuentoDetalle(value: number) {
        this.valorDescuentoDetalle = value;
    }

    public get $impuestoDetalle(): number {
        return this.impuestoDetalle;
    }

    public set $impuestoDetalle(value: number) {
        this.impuestoDetalle = value;
    }

    public get $precioTotalDetalle(): number {
        return this.precioTotalDetalle;
    }

    public set $precioTotalDetalle(value: number) {
        this.precioTotalDetalle = value;
    }


}
