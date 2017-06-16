export class Moneda {
    private codigo: string;
    private descripcion: string;
    private uuid: string;


    constructor($codigo: string, $descripcion: string, $uuid: string) {
        this.codigo = $codigo;
        this.descripcion = $descripcion;
        this.uuid = $uuid;
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

    public get $uuid(): string {
        return this.uuid;
    }

    public set $uuid(value: string) {
        this.uuid = value;
    }

}
