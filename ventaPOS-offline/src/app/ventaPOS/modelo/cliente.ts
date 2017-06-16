export class Cliente {
    private id: string;
    private nombreCompleto: string;
    private uuid: string;

    constructor($id: string, $nombreCompleto: string, $uuid: string) {
        this.id = $id;
        this.nombreCompleto = $nombreCompleto;
        this.uuid = $uuid;
    }


    public get $id(): string {
        return this.id;
    }

    public set $id(value: string) {
        this.id = value;
    }

    public get $nombreCompleto(): string {
        return this.nombreCompleto;
    }

    public set $nombreCompleto(value: string) {
        this.nombreCompleto = value;
    }

    public get $uuid(): string {
        return this.uuid;
    }

    public set $uuid(value: string) {
        this.uuid = value;
    }


}
