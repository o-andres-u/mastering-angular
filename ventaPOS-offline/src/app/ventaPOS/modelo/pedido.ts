
import { Cliente } from './cliente';
import { EstadoPedido } from './estado-pedido';
import { FormaPago } from './forma-pago';
import { Centro } from './centro';
import { Unidad } from './unidad';
import { Vendedor } from './vendedor';
import { Moneda } from './moneda';

export class Pedido {
    private cliente: Cliente;
    private formaPago: FormaPago;
    private estadoPedido: EstadoPedido;
    private numeroPedido: string;
    private fechaElaboracion: Date;
    private fechaVencimiento: Date;
    private precioIncluyeImpuestos = true;
    private tasaCambio: number;
    private centro: Centro;
    private unidad: Unidad;
    private vendedor: Vendedor;
    private moneda: Moneda;
    private descuentoPiePag: number;
    private uuidPedido: string;


    constructor(
        $cliente: Cliente,
        $formaPago: FormaPago,
        $estadoPedido: EstadoPedido,
        $numeroPedido: string,
        $fechaElaboracion: Date,
        $fechaVencimiento: Date,
        $tasaCambio: number,
        $unidad: Unidad,
        $vendedor: Vendedor,
        $moneda: Moneda,
        $descuentoPiePag: number,
        $uuidPedido: string
    ) {
        this.cliente = $cliente;
        this.formaPago = $formaPago;
        this.estadoPedido = $estadoPedido;
        this.numeroPedido = $numeroPedido;
        this.fechaElaboracion = $fechaElaboracion;
        this.fechaVencimiento = $fechaVencimiento;
        this.tasaCambio = $tasaCambio;
        this.unidad = $unidad;
        this.vendedor = $vendedor;
        this.moneda = $moneda;
        this.descuentoPiePag = $descuentoPiePag;
        this.uuidPedido = $uuidPedido;
    }


    public get $cliente(): Cliente {
        return this.cliente;
    }

    public set $cliente(value: Cliente) {
        this.cliente = value;
    }

    public get $formaPago(): FormaPago {
        return this.formaPago;
    }

    public set $formaPago(value: FormaPago) {
        this.formaPago = value;
    }

    public get $estadoPedido(): EstadoPedido {
        return this.estadoPedido;
    }

    public set $estadoPedido(value: EstadoPedido) {
        this.estadoPedido = value;
    }

    public get $numeroPedido(): string {
        return this.numeroPedido;
    }

    public set $numeroPedido(value: string) {
        this.numeroPedido = value;
    }

    public get $fechaElaboracion(): Date {
        return this.fechaElaboracion;
    }

    public set $fechaElaboracion(value: Date) {
        this.fechaElaboracion = value;
    }

    public get $fechaVencimiento(): Date {
        return this.fechaVencimiento;
    }

    public set $fechaVencimiento(value: Date) {
        this.fechaVencimiento = value;
    }

    public get $tasaCambio(): number {
        return this.tasaCambio;
    }

    public set $tasaCambio(value: number) {
        this.tasaCambio = value;
    }

    public get $centro(): Centro {
        return this.centro;
    }

    public set $centro(value: Centro) {
        this.centro = value;
    }

    public get $unidad(): Unidad {
        return this.unidad;
    }

    public set $unidad(value: Unidad) {
        this.unidad = value;
    }

    public get $vendedor(): Vendedor {
        return this.vendedor;
    }

    public set $vendedor(value: Vendedor) {
        this.vendedor = value;
    }

    public get $moneda(): Moneda {
        return this.moneda;
    }

    public set $moneda(value: Moneda) {
        this.moneda = value;
    }

    public get $descuentoPiePag(): number {
        return this.descuentoPiePag;
    }

    public set $descuentoPiePag(value: number) {
        this.descuentoPiePag = value;
    }

    public get $uuidPedido(): string {
        return this.uuidPedido;
    }

    public set $uuidPedido(value: string) {
        this.uuidPedido = value;
    }

    public get $precioIncluyeImpuestos(): boolean {
        return this.precioIncluyeImpuestos;
    }
}
