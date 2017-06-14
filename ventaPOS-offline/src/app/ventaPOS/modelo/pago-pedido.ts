export class PagoPedido {
    private medioPagoDescripcion: string;
    private tarjeta: string;
    private numeroTarjeta: string;
    private nroCuentaBancaria: string;
    private nombreEntidadFinanciera: string;
    private nroConfirmacion: string;
    private ivaTarjetas: number;
    private valorRecibido: number;


    constructor(
        $medioPagoDescripcion: string,
        $tarjeta: string,
        $numeroTarjeta: string,
        $nroCuentaBancaria: string,
        $nombreEntidadFinanciera: string,
        $nroConfirmacion: string,
        $ivaTarjetas: number,
        $valorRecibido: number
    ) {
        this.medioPagoDescripcion = $medioPagoDescripcion;
        this.tarjeta = $tarjeta;
        this.numeroTarjeta = $numeroTarjeta;
        this.nroCuentaBancaria = $nroCuentaBancaria;
        this.nombreEntidadFinanciera = $nombreEntidadFinanciera;
        this.nroConfirmacion = $nroConfirmacion;
        this.ivaTarjetas = $ivaTarjetas;
        this.valorRecibido = $valorRecibido;
    }

    public get $medioPagoDescripcion(): string {
        return this.medioPagoDescripcion;
    }

    public set $medioPagoDescripcion(value: string) {
        this.medioPagoDescripcion = value;
    }

    public get $tarjeta(): string {
        return this.tarjeta;
    }

    public set $tarjeta(value: string) {
        this.tarjeta = value;
    }

    public get $numeroTarjeta(): string {
        return this.numeroTarjeta;
    }

    public set $numeroTarjeta(value: string) {
        this.numeroTarjeta = value;
    }

    public get $nroCuentaBancaria(): string {
        return this.nroCuentaBancaria;
    }

    public set $nroCuentaBancaria(value: string) {
        this.nroCuentaBancaria = value;
    }

    public get $nombreEntidadFinanciera(): string {
        return this.nombreEntidadFinanciera;
    }

    public set $nombreEntidadFinanciera(value: string) {
        this.nombreEntidadFinanciera = value;
    }

    public get $nroConfirmacion(): string {
        return this.nroConfirmacion;
    }

    public set $nroConfirmacion(value: string) {
        this.nroConfirmacion = value;
    }

    public get $ivaTarjetas(): number {
        return this.ivaTarjetas;
    }

    public set $ivaTarjetas(value: number) {
        this.ivaTarjetas = value;
    }

    public get $valorRecibido(): number {
        return this.valorRecibido;
    }

    public set $valorRecibido(value: number) {
        this.valorRecibido = value;
    }


}
