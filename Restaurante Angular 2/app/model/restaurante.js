"use strict";
/**
 * Created by alejandropalacio on 6/03/17.
 */
var Restaurante = (function () {
    function Restaurante(id, nombre, direccion, descripcion, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }
    return Restaurante;
}());
exports.Restaurante = Restaurante;
//# sourceMappingURL=restaurante.js.map