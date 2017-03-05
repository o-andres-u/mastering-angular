System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Restaurante;
    return {
        setters:[],
        execute: function() {
            Restaurante = (function () {
                function Restaurante(id, nombre, direccion, descripcion, imagen, precio) {
                    if (id === void 0) { id = null; }
                    if (nombre === void 0) { nombre = null; }
                    if (direccion === void 0) { direccion = null; }
                    if (descripcion === void 0) { descripcion = null; }
                    if (imagen === void 0) { imagen = null; }
                    if (precio === void 0) { precio = null; }
                    this.id = id;
                    this.nombre = nombre;
                    this.direccion = direccion;
                    this.descripcion = descripcion;
                    this.imagen = imagen;
                    this.precio = precio;
                }
                return Restaurante;
            }());
            exports_1("Restaurante", Restaurante);
        }
    }
});
//# sourceMappingURL=restaurante.js.map