export class MedioPago {
    private codigo: string;
    private descripcion: string;


    constructor($codigo: string, $descripcion: string) {
        this.codigo = $codigo;
        this.descripcion = $descripcion;
    }

    public get $codigo(): string {
        return this.codigo;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public get $descripcion(): string {
        return this.descripcion;
    }

    public set $descripcion(value: string) {
        this.descripcion = value;
    }

}
