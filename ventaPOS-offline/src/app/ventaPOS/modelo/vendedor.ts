export class Vendedor {
    private tipoPersona: string;
    private tipoId: string;
    private id: string;
    private nombre: string;
    private uuid: string;


    constructor($tipoPersona: string, $tipoId: string, $id: string, $nombre: string, $uuid: string) {
        this.tipoPersona = $tipoPersona;
        this.tipoId = $tipoId;
        this.id = $id;
        this.nombre = $nombre;
        this.uuid = $uuid;
    }

    public get $tipoPersona(): string {
        return this.tipoPersona;
    }

    public set $tipoPersona(value: string) {
        this.tipoPersona = value;
    }

    public get $tipoId(): string {
        return this.tipoId;
    }

    public set $tipoId(value: string) {
        this.tipoId = value;
    }

    public get $id(): string {
        return this.id;
    }

    public set $id(value: string) {
        this.id = value;
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
