
import { Unidad } from './unidad';

export class Centro {
    private codigo: string;
    private nombre: string;
    private uuid: string;
    private unidad: Unidad;

    constructor($codigo: string, $nombre: string, $uuid: string) {
        this.codigo = $codigo;
        this.uuid = $uuid;
        this.nombre = $nombre;
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

    public get $unidad(): Unidad {
        return this.unidad;
    }

    public set $unidad(value: Unidad) {
        this.unidad = value;
    }


}
