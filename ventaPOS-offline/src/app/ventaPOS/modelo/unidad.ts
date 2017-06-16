export class Unidad {
    private codigo: string;
    private nombre: string;
    private uuid: string;


    constructor($codigo: string, $nombre: string, $uuid: string) {
        this.codigo = $codigo;
        this.nombre = $nombre;
        this.uuid = $uuid;
    }


    public get $codigo(): string {
        return this.codigo;
    }

    public set $codigo(value: string) {
        this.codigo = value;
    }

    public get $nombre(): string {
        return this.nombre;
    }

    public set $nombre(value: string) {
        this.nombre = value;
    }

    public get $uuid(): string {
        return this.uuid;
    }

    public set $uuid(value: string) {
        this.uuid = value;
    }

}
