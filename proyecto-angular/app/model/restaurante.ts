export class Restaurante {
    constructor(
        public id: number,
        public nombre: string,
        public direccion: string,
        public descripcion: string,
        public imagen: string,
        public precio: number
    ) {}
}