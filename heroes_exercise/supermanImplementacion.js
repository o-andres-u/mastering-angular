var SupermanImplementacion;
(function (SupermanImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var Superman = (function () {
        function Superman(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        Superman.prototype.luchar = function () {
            console.log('Luchando como Superman');
        };
        Superman.prototype.salvar = function () {
            console.log('Salvando como Superman');
        };
        Superman.prototype.correr = function () {
            console.log('Corriendo como Superman');
        };
        Superman.prototype.disparar = function () {
            console.log('Disparando como Superman');
        };
        Superman.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        Superman.prototype.volar = function () {
            console.log('Volando como Superman');
        };
        Superman.prototype.aterrizar = function () {
            console.log('Aterrizando como Superman');
        };
        return Superman;
    }());
    SupermanImplementacion.Superman = Superman;
})(SupermanImplementacion || (SupermanImplementacion = {}));
