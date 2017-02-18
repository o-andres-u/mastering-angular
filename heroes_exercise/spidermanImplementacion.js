var SpidermanImplementacion;
(function (SpidermanImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var Spiderman = (function () {
        function Spiderman(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        Spiderman.prototype.luchar = function () {
            console.log('Luchando como Spiderman');
        };
        Spiderman.prototype.salvar = function () {
            console.log('Salvando como Spiderman');
        };
        Spiderman.prototype.correr = function () {
            console.log('Corriendo como Spiderman');
        };
        Spiderman.prototype.disparar = function () {
            console.log('Disparando como Spiderman');
        };
        Spiderman.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        return Spiderman;
    }());
    SpidermanImplementacion.Spiderman = Spiderman;
})(SpidermanImplementacion || (SpidermanImplementacion = {}));
