var BatmanImplementacion;
(function (BatmanImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var Batman = (function () {
        function Batman(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        Batman.prototype.luchar = function () {
            console.log('Luchando como Batman');
        };
        Batman.prototype.salvar = function () {
            console.log('Salvando como Batman');
        };
        Batman.prototype.correr = function () {
            console.log('Corriendo como Batman');
        };
        Batman.prototype.disparar = function () {
            console.log('Disparando como Batman');
        };
        Batman.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        return Batman;
    }());
    BatmanImplementacion.Batman = Batman;
})(BatmanImplementacion || (BatmanImplementacion = {}));
